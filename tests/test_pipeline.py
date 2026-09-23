import json
import subprocess
import sys
from pathlib import Path

import numpy as np
import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from concept_data import cached_vectors, closure, inventory, parse_obo, score_rows, embedding_spaces
from build_site import build, validate


def make_source(tmp_path):
    root = tmp_path / 'source'
    for directory in ('disorders', 'modules'):
        (root / 'kb' / directory).mkdir(parents=True)
    (root / 'kb/disorders/A.yaml').write_text('''name: Disease A
pathophysiology:
- name: Injury
  description: damaged cells
  cell_types:
  - preferred_term: test cell
    term: {id: 'CL:TEST_CHILD', label: test cell}
  downstream:
  - target: Repair
- name: Repair
  description: repair tissue
phenotypes:
- name: Feature
  phenotype_term:
    term: {id: 'HP:TEST_CHILD', label: test feature}
''')
    (root / 'kb/modules/M.yaml').write_text('''name: Module M
pathophysiology:
- name: Injury
  description: damaged cells
''')
    subprocess.run(['git', 'init', '-q', str(root)], check=True)
    subprocess.run(['git', '-C', str(root), 'add', 'kb'], check=True)
    subprocess.run(['git', '-C', str(root), '-c', 'user.name=Test', '-c', 'user.email=test@example.org', 'commit', '-qm', 'fixture'], check=True)
    return root


def make_ontologies(tmp_path):
    root = tmp_path / 'ontologies'
    root.mkdir()
    for name, prefix in [('cell', 'CL'), ('anatomy', 'UBERON'), ('go', 'GO'), ('phenotype', 'HP')]:
        (root / f'{name}.obo').write_text(f'''format-version: 1.2
data-version: test-fixture

[Term]
id: {prefix}:TEST_CHILD
name: test child
is_a: {prefix}:TEST_PARENT ! test parent

[Term]
id: {prefix}:TEST_PARENT
name: test parent
''')
    return root


def encode(texts):
    # Deterministic test double; never used in deployed builds.
    return np.array([[len(t), sum(map(ord, t)) % 17 + 1, t.count('a') + 1] for t in texts], dtype=np.float32)


def test_cache_does_not_define_inventory(tmp_path):
    calls = []
    def recording(texts):
        calls.extend(texts)
        return encode(texts)
    cache = tmp_path / 'vectors.sqlite'
    first = cached_vectors(['old', 'same'], cache, {'model': 'v1'}, recording)
    second = cached_vectors(['same', 'new'], cache, {'model': 'v1'}, recording)
    assert calls == ['old', 'same', 'new']
    np.testing.assert_array_equal(first[1], second[0])
    cached_vectors(['same'], cache, {'model': 'v2'}, recording)
    assert calls[-1] == 'same'
    cached_vectors(['same'], cache, {'model': 'v2', 'text_version': 'new'}, recording)
    assert calls[-1] == 'same' and len(calls) == 5


def test_warm_cache_handles_add_edit_rename_and_delete(tmp_path):
    config = {'model': 'test', 'model_revision': 'test'}
    def entity(text):
        return {'spaces': {'pathophysiology': text}}
    before = {'disease:old': {'id': 'disease:old', **entity('old text')}}
    embedding_spaces(before, config, tmp_path / 'v.sqlite', encode)
    after = {'disease:new': {'id': 'disease:new', **entity('new text')},
             'disease:empty': {'id': 'disease:empty', **entity('')}}
    result = embedding_spaces(after, config, tmp_path / 'v.sqlite', encode)
    assert [p['id'] for p in result['pathophysiology']['points']] == ['disease:new']
    assert result['pathophysiology']['excluded'][0]['id'] == 'disease:empty'


def test_closure_chooses_best_path_and_terminates_cycles():
    edges = {'child': [('middle', 'is_a'), ('root', 'develops_from')],
             'middle': [('root', 'is_a')], 'root': [('child', 'is_a')]}
    result = closure('child', edges, {'is_a': .8, 'develops_from': .6})
    assert result['root'][0] == pytest.approx(.64)
    assert result['root'][2] == ['child', 'middle', 'root']
    assert result['child'][0] == 1


def test_score_contract_no_duplicate_inflation(tmp_path):
    source = make_source(tmp_path)
    ontology_dir = make_ontologies(tmp_path)
    ontologies = {name: parse_obo(ontology_dir / f'{name}.obo', name)
                  for name in ('cell', 'anatomy', 'go', 'phenotype')}
    entities, observations, _ = inventory(source)
    rows, unknown = score_rows(entities, observations * 2, ontologies)
    assert not unknown
    direct = next(r for r in rows if r['term_id'] == 'CL:TEST_CHILD')
    parent = next(r for r in rows if r['term_id'] == 'CL:TEST_PARENT')
    assert direct['score'] == 1
    assert parent['score'] == .8
    assert parent['best_path_is_a_hops'] == 1
    assert parent['supporting_source_node_names'] == 'Injury'
    rows, unknown = score_rows(entities, [('cell', 'disease:A', 'CL:MISSING', 'Injury')], ontologies)
    assert len(rows) == len(unknown) == 1
    assert rows[0]['is_direct']


def test_full_build_and_failure_preserves_last_site(tmp_path):
    source = make_source(tmp_path)
    ontology_dir = make_ontologies(tmp_path)
    output = tmp_path / 'site'
    build(source, output, tmp_path / 'cache', ontology_dir, encode)
    validate(output)
    original = (output / 'manifest.json').read_bytes()
    def fail(texts):
        raise RuntimeError('provider failed')
    with pytest.raises(RuntimeError, match='provider failed'):
        build(source, output, tmp_path / 'empty-cache', ontology_dir, fail)
    assert (output / 'manifest.json').read_bytes() == original
    catalog_path = output / 'build/site-data/concepts.json'
    catalog = json.loads(catalog_path.read_text())
    catalog['source_sha'] = 'stale'
    catalog_path.write_text(json.dumps(catalog))
    with pytest.raises(ValueError, match='Mixed source snapshots'):
        validate(output)


def test_duplicate_yaml_fails(tmp_path):
    source = make_source(tmp_path)
    (source / 'kb/disorders/A.yaml').write_text('name: A\nname: B\n')
    with pytest.raises(ValueError, match='Duplicate YAML key'):
        inventory(source)
