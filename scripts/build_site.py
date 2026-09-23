#!/usr/bin/env python3
"""Build a disposable, validated concept explorer from one DisMech checkout."""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import tempfile
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from build_browser_data import (build_downloads, build_indexes, build_term_records,
                                read_context_rows, write_json, write_term_shards)
from concept_data import (METHOD, PREDICATES, digest, embedding_spaces, export_scores,
                          inventory, parse_obo, score_rows)

ROOT = Path(__file__).resolve().parents[1]


def git(root, *args):
    return subprocess.check_output(['git', '-C', str(root), *args], text=True).strip()


def download(url, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={
                'User-Agent': 'DisMechConceptExplorer/0.1 (+https://github.com/monarch-initiative/dismech-ont-scores)'})
            with urllib.request.urlopen(request, timeout=120) as response, target.open('wb') as stream:
                shutil.copyfileobj(response, stream)
            return
        except Exception:
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)


def read_shard(path):
    text = path.read_text()
    data = json.loads(text[text.index('] = ') + 4:text.rindex(';\nwindow.dispatchEvent')])
    if 'columns' in data:
        data['diseases'] = [dict(zip(data['columns'], row, strict=True)) for row in data['diseases']]
    return data


def expand_spaces(catalog):
    for space in catalog['spaces'].values():
        ids = space.pop('ids', None)
        if ids is not None:
            for point in space['points']:
                point['id'] = ids[point['id']]
                for neighbor in point['neighbors']:
                    neighbor['id'] = ids[neighbor['id']]
    return catalog


def validate(site):
    manifest = json.loads((site / 'manifest.json').read_text())
    catalog = json.loads((site / 'build/site-data/concepts.json').read_text())
    expand_spaces(catalog)
    entities = catalog['entities']
    if not manifest.get('source_sha') or not entities:
        raise ValueError('Missing source revision or empty inventory')
    if catalog['source_sha'] != manifest['source_sha'] or catalog['release_id'] != manifest['release_id']:
        raise ValueError('Mixed source snapshots')
    for name, sha in manifest['files'].items():
        path = site / name
        if not path.is_file() or digest(path.read_bytes()) != sha:
            raise ValueError(f'Missing or changed artifact: {name}')
    detail_cache = {}
    for entity in entities.values():
        path = entity['detail_path']
        if path not in detail_cache:
            detail_cache[path] = json.loads((site / 'build/site-data' / path).read_text())
        detail = detail_cache[path]
        if detail['__release_id'] != manifest['release_id'] or entity['id'] not in detail or detail[entity['id']]['name'] != entity['name']:
            raise ValueError(f'Missing/inconsistent detail: {entity["id"]}')
        for node in entity.get('nodes', []):
            if node not in entities or entities[node]['parent'] != entity['id']:
                raise ValueError(f'Broken node reference: {node}')
        if entity.get('parent') and entity['parent'] not in entities:
            raise ValueError(f'Broken parent: {entity["id"]}')
    for name, space in catalog['spaces'].items():
        points = space['points']
        ids = {point['id'] for point in points}
        excluded = {row['id'] for row in space['excluded']}
        expected = {key for key, entity in entities.items() if name in entity['spaces']}
        if len(ids) != len(points) or ids & excluded or ids | excluded != expected:
            raise ValueError(f'Incomplete or duplicated inventory in {name}')
        if space['eligible_count'] != len(expected):
            raise ValueError(f'Wrong eligible count in {name}')
        for point in points:
            if len(point['xy']) != 2 or not all(isinstance(v, (int, float)) and abs(v) < float('inf') for v in point['xy']):
                raise ValueError(f'Invalid coordinates: {point["id"]}')
            for neighbor in point['neighbors']:
                if neighbor['id'] not in ids or neighbor['id'] == point['id'] or not -1.00001 <= neighbor['cosine'] <= 1.00001:
                    raise ValueError(f'Invalid neighbor: {neighbor}')
    # Parse all shard JSON and ensure every ranking joins to the current inventory.
    index = json.loads((site / 'build/site-data/indexes/term_index.json').read_text())
    for term in index:
        shard = site / 'build/site-data' / term['shard_path']
        data = read_shard(shard)
        if data['release_id'] != manifest['release_id'] or data['term_id'] != term['term_id'] or len(data['diseases']) != term['disease_count']:
            raise ValueError(f'Inconsistent shard: {shard}')
        for row in data['diseases']:
            key = 'disease:' + Path(row['source_file']).stem
            if key not in entities:
                raise ValueError(f'Unknown disease in scores: {key}')
    size = sum((site / name).stat().st_size for name in manifest['files'])
    if size > 950_000_000:
        raise ValueError(f'Site exceeds the 950 MB publication budget: {size} bytes')
    print(f"Validated {len(entities)} concepts, {len(index)} terms, {len(manifest['files'])} files")


def build(source, output, cache, ontology_dir=None, encode=None, config=None):
    config = config or json.loads((ROOT / 'config/build.json').read_text())
    source = source.resolve()
    source_sha = git(source, 'rev-parse', 'HEAD')
    # Never stamp dirty curated input as a committed snapshot.
    if git(source, 'status', '--porcelain', '--', 'kb/disorders', 'kb/modules'):
        raise ValueError('Source KB has uncommitted changes')
    entities, observations, source_files = inventory(source)
    print(f"Source {source_sha}: {len(source_files)} files, {len(entities)} concepts", flush=True)
    output = output.resolve()
    if any(output == protected or output in protected.parents
           for protected in (source, ROOT, cache.resolve())):
        raise ValueError('Output must not replace source, browser, or cache directories')
    if output.exists() and not (output / 'manifest.json').is_file():
        raise ValueError('Refusing to replace a directory without a build manifest')
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='concept-build-', dir=output.parent) as temporary:
        stage = Path(temporary) / 'site'
        stage.mkdir()
        shutil.copy2(ROOT / 'index.html', stage / 'index.html')
        shutil.copytree(ROOT / 'app', stage / 'app')
        shutil.copy2(ROOT / 'METHODS.md', stage / 'METHODS.md')
        (stage / '.nojekyll').touch()
        ontologies, ontology_manifest = {}, {}
        for name, url in config['ontology_urls'].items():
            print(f'Ontology {name}: {url}', flush=True)
            path = Path(ontology_dir) / f'{name}.obo' if ontology_dir else Path(temporary) / f'{name}.obo'
            if not ontology_dir:
                download(url, path)
            ontologies[name] = parse_obo(path, name)
            ontology_manifest[name] = {'url': url, 'sha256': digest(path.read_bytes()),
                                      'versions': ontologies[name][2], 'predicates': PREDICATES[name]}
        rows, unresolved = score_rows(entities, observations, ontologies)
        raw = Path(temporary) / 'raw'
        export_scores(rows, raw)
        data_dir = stage / 'build/site-data'
        # Round-trip through the legacy TSV contract, retaining existing term routes/downloads.
        rows = read_context_rows(raw / 'context_scores.tsv')
        terms = build_term_records(rows)
        generated = datetime.now(timezone.utc).isoformat()
        release_id = digest(generated.encode())[:20]
        page = (stage / 'index.html').read_text()
        import re
        page = re.sub(r'(src|href)="((?:app/|build/site-data/)[^"]+)"',
                      lambda match: f'{match[1]}="{match[2]}?v={release_id}"', page)
        page = page.replace('<head>', '<head>\n<script>window.CONCEPT_RELEASE=' + json.dumps(release_id) + ';</script>')
        (stage / 'index.html').write_text(page)
        downloads = build_downloads(raw, data_dir)
        from collections import Counter
        score_manifest = {'generated_at': generated, 'dismech_sha': source_sha,
                          'method': METHOD, 'release_id': release_id, 'ontologies': ontology_manifest,
                          'total_rows': len(rows), 'total_terms': len(terms),
                          'ontology_row_counts': dict(Counter(r['ontology'] for r in rows)),
                          'ontology_term_counts': dict(Counter(k[0] for k in terms)),
                          'downloads': downloads}
        write_term_shards(data_dir, terms, write_json_files=False, compact_rows=True, release_id=release_id)
        build_indexes(data_dir, rows, terms, score_manifest, write_json_files=True)
        spaces = embedding_spaces(entities, config, cache / 'vectors.sqlite', encode)
        # Full rendered text and pathograph details are fetched per entry, not upfront.
        from collections import defaultdict
        details = defaultdict(dict)
        compact_entities = {}
        for key, entity in entities.items():
            parent = entity.get('parent', key)
            detail_path = 'entities/' + digest(parent.encode())[:20] + '.json'
            details[detail_path][key] = entity
            compact_entities[key] = {k: entity[k] for k in ('id', 'kind', 'name', 'parent', 'mondo', 'terms', 'nodes') if k in entity}
            compact_entities[key]['spaces'] = dict.fromkeys(entity['spaces'], True)
            compact_entities[key]['detail_path'] = detail_path
        for path, payload in details.items():
            payload['__release_id'] = release_id
            write_json(data_dir / path, payload)
        # Dictionary-encode neighbor identities: node names are long and repeated 10x.
        for space in spaces.values():
            ids = [p['id'] for p in space['points']]
            positions = {key: i for i, key in enumerate(ids)}
            space['ids'] = ids
            for point in space['points']:
                point['id'] = positions[point['id']]
                for neighbor in point['neighbors']:
                    neighbor['id'] = positions[neighbor['id']]
        catalog = {'source_sha': source_sha, 'release_id': release_id, 'generated_at': generated, 'method': METHOD,
                   'entities': compact_entities, 'spaces': spaces, 'unresolved_annotations': unresolved}
        write_json(data_dir / 'concepts.json', catalog)
        write_json(data_dir / 'downloads/unresolved_annotations.json', unresolved)
        # Inventory detects edits/removals during a local build, even if HEAD is unchanged.
        if git(source, 'rev-parse', 'HEAD') != source_sha or inventory(source)[2] != source_files:
            raise ValueError('Source changed during build; rerun against a stable checkout')
        manifest = {'format_version': 1, 'source_sha': source_sha,
                    'source_commit_time': git(source, 'show', '-s', '--format=%cI', 'HEAD'),
                    'browser_sha': git(ROOT, 'rev-parse', 'HEAD'),
                    'browser_dirty': bool(git(ROOT, 'status', '--porcelain', '--', 'app', 'scripts', 'index.html', 'config', 'uv.lock', 'METHODS.md')),
                    'generated_at': generated, 'method': METHOD, 'release_id': release_id, 'ontologies': ontology_manifest,
                    'source_files': source_files,
                    'files': {p.relative_to(stage).as_posix(): digest(p.read_bytes())
                              for p in sorted(stage.rglob('*')) if p.is_file()}}
        write_json(stage / 'manifest.json', manifest)
        validate(stage)
        # Publishing consumes only successfully completed builds. An error above leaves
        # the previous output intact and propagates a nonzero exit to Actions.
        if output.exists():
            shutil.rmtree(output)
        shutil.move(str(stage), output)
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path)
    parser.add_argument('--output', type=Path, default=Path('dist'))
    parser.add_argument('--cache', type=Path, default=Path('.cache'))
    parser.add_argument('--ontology-dir', type=Path, help='Explicit offline OBO snapshot directory')
    parser.add_argument('--validate', action='store_true')
    args = parser.parse_args()
    if args.validate:
        validate(args.output)
    elif args.source:
        build(args.source, args.output, args.cache, args.ontology_dir)
    else:
        parser.error('--source is required to build')


if __name__ == '__main__':
    main()
