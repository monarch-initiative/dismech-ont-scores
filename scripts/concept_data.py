"""Current-source concept inventory, explicit v2 scores, and cached local vectors.

Scientific contract: see METHODS.md. The March 2026 exporter was not recoverable;
this method does not claim numerical compatibility with that snapshot.
"""
from __future__ import annotations

import csv
import hashlib
import heapq
import json
import math
import sqlite3
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote

import numpy as np
import yaml

METHOD = "context-v2-max-product"
TEXT_VERSION = "concept-text-v1"
PREFIXES = {"cell": "CL:", "anatomy": "UBERON:", "go": "GO:", "phenotype": "HP:"}
PREDICATES = {
    "cell": {"is_a": 0.8, "develops_from": 0.6},
    "anatomy": {"is_a": 0.8, "part_of": 0.8},
    "go": {"is_a": 0.8, "part_of": 0.8},
    "phenotype": {"is_a": 0.8},
}
RELATIONS = {"BFO:0000050": "part_of", "RO:0002202": "develops_from"}
SLOTS = {"cell": "cell_types", "anatomy": "locations", "go": "biological_processes"}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def canonical(value) -> str:
    return json.dumps(value, sort_keys=True, ensure_ascii=True, separators=(",", ":"))


class UniqueLoader(getattr(yaml, "CSafeLoader", yaml.SafeLoader)):
    """Reject duplicate keys rather than silently dropping curated content."""


def unique_mapping(loader, node, deep=False):
    mapping = {}
    for key_node, value_node in node.value:
        key = loader.construct_object(key_node, deep=deep)
        if key in mapping:
            raise ValueError(f"Duplicate YAML key: {key}")
        mapping[key] = loader.construct_object(value_node, deep=deep)
    return mapping


UniqueLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, unique_mapping)


def parse_obo(path: Path, ontology: str):
    """Read named classes and asserted allowed edges; never infer equivalence."""
    labels, edges, versions = {}, defaultdict(list), []
    current, blocks = None, []
    for line in path.read_text().splitlines():
        if line.startswith("data-version: "):
            versions.append(line.split(": ", 1)[1])
        if line.startswith("["):
            if current is not None:
                blocks.append(current)
            current = {} if line == "[Term]" else None
        elif current is not None and ": " in line:
            key, val = line.split(": ", 1)
            current.setdefault(key, []).append(val.split(" ! ")[0])
    if current is not None:
        blocks.append(current)
    for block in blocks:
        term = block.get("id", [""])[0]
        if not term.startswith(PREFIXES[ontology]) or block.get("is_obsolete") == ["true"]:
            continue
        labels[term] = block.get("name", [term])[0]
        for parent in block.get("is_a", []):
            edges[term].append((parent.split()[0], "is_a"))
        for relation in block.get("relationship", []):
            parts = relation.split()
            if len(parts) >= 2:
                pred = RELATIONS.get(parts[0], parts[0])
                if pred in PREDICATES[ontology]:
                    edges[term].append((parts[1], pred))
    edges = {term: sorted(set((p, r) for p, r in links if p in labels))
             for term, links in edges.items() if term in labels}
    if not labels:
        raise ValueError(f"No {ontology} terms in {path}")
    return labels, edges, versions


def closure(term, edges, weights):
    """Maximum-product path; strict improvements make cycles finite."""
    best = {term: (1.0, [], [term])}
    queue = [(-1.0, term)]
    while queue:
        negative, node = heapq.heappop(queue)
        score, predicates, nodes = best[node]
        if -negative < score:
            continue
        for parent, pred in edges.get(node, []):
            candidate = score * weights[pred]
            if candidate > best.get(parent, (0, [], []))[0]:
                best[parent] = (candidate, predicates + [pred], nodes + [parent])
                heapq.heappush(queue, (-candidate, parent))
    return best


def term_descriptors(items):
    return [(x["term"]["id"], x["term"].get("label", x.get("preferred_term", "")))
            for x in items or [] if isinstance(x, dict)
            and isinstance(x.get("term"), dict) and x["term"].get("id")]


def describe(items):
    """Deliberate text fields only: no citations, timestamps or evidence snippets."""
    parts = []
    for item in items or []:
        if not isinstance(item, dict):
            continue
        for slot in ("name", "description"):
            if item.get(slot):
                parts.append(str(item[slot]))
        for slot in ("cell_types", "locations", "biological_processes", "molecular_functions", "genes"):
            parts.extend(x.get("preferred_term") or x.get("term", {}).get("label", "")
                         for x in item.get(slot, []) or [] if isinstance(x, dict))
        for slot in ("phenotype_term", "treatment_term"):
            obj = item.get(slot) or {}
            parts.append(obj.get("preferred_term") or obj.get("term", {}).get("label", ""))
    return ". ".join(dict.fromkeys(str(p).strip() for p in parts if str(p).strip()))


def inventory(root: Path):
    entities, observations, source_files = {}, [], {}
    for kind, folder in (("disease", "disorders"), ("module", "modules")):
        paths = sorted((root / "kb" / folder).glob("*.yaml"))
        if not paths:
            raise ValueError(f"Missing or empty source: kb/{folder}")
        for path in paths:
            raw = path.read_bytes()
            relative = path.relative_to(root).as_posix()
            source_files[relative] = digest(raw)
            doc = yaml.load(raw, Loader=UniqueLoader)
            if not isinstance(doc, dict) or not doc.get("name"):
                raise ValueError(f"Not a named entry: {relative}")
            key = f"{kind}:{path.stem}"
            # Match dismech.export.utils.slugify for disorders; modules use the file stem.
            page_slug = str(doc['name']).replace(' ', '_').replace('/', '_').replace('(', '').replace(')', '') if kind == 'disease' else path.stem
            entity = {"id": key, "kind": kind, "name": str(doc["name"]),
                      "source_file": relative, "source_hash": source_files[relative],
                      "mondo": (doc.get("disease_term") or {}).get("term", {}).get("id", ""),
                      "page_url": f"https://dismech.monarchinitiative.org/pages/{folder}/{quote(page_slug, safe="")}.html",
                      "terms": [], "nodes": [], "spaces": {}}
            entities[key] = entity
            nodes = doc.get("pathophysiology") or []
            names = [n["name"] for n in nodes]
            if len(set(names)) != len(names):
                raise ValueError(f"Duplicate mechanism names in {relative}")
            for node in nodes:
                node_id = f"{key}#pathophysiology/{quote(node['name'], safe='')}"
                terms = []
                for ontology, slot in SLOTS.items():
                    for term, label in term_descriptors(node.get(slot)):
                        terms.append({"id": term, "label": label, "ontology": ontology})
                        if kind == "disease" and term.startswith(PREFIXES[ontology]):
                            observations.append((ontology, key, term, node['name']))
                mechanism = {"id": node_id, "kind": "mechanism", "name": node["name"],
                             "parent": key, "source_file": relative,
                             "source_hash": source_files[relative], "page_url": entity["page_url"],
                             "description": node.get("description", ""), "terms": terms,
                             "conforms_to": node.get("conforms_to", ""),
                             "downstream": [{k: edge[k] for k in ("target", "causal_link_type", "description") if k in edge}
                                            for edge in node.get("downstream") or []],
                             "spaces": {"mechanisms": describe([node])}}
                entities[node_id] = mechanism
                entity["nodes"].append(node_id)
                entity["terms"].extend(terms)
            for phenotype in doc.get("phenotypes") or []:
                for term, label in term_descriptors([phenotype.get("phenotype_term") or {}]):
                    entity["terms"].append({"id": term, "label": label, "ontology": "phenotype"})
                    if kind == "disease" and term.startswith("HP:"):
                        observations.append(("phenotype", key, term, phenotype.get("name", label)))
            if kind == "disease":
                cell_items = [{slot: n.get(slot) for slot in ("cell_types", "locations")} for n in nodes]
                entity["spaces"] = {"pathophysiology": describe(nodes),
                                    "phenotypes": describe(doc.get("phenotypes")),
                                    "treatments": describe(doc.get("treatments")),
                                    "celltypes": describe(cell_items)}
            entity["terms"] = list({(t['ontology'], t['id']): t for t in entity["terms"]}.values())
    return entities, sorted(set(observations)), source_files


def score_rows(entities, observations, ontologies):
    """v2: max support (one per disease/term), decayed closure, corpus specificity.

    No causal-depth weighting: the unavailable v1's graph rule is not reproduced.
    A phenotype frequency or downstream edge is not silently converted to a weight.
    """
    support = defaultdict(dict)
    unknown = []
    for ontology, disease, term, node in observations:
        labels, edges, _ = ontologies[ontology]
        if term not in labels:
            unknown.append({"ontology": ontology, "disease": disease, "term": term, "node": node})
            # Preserve an unresolved curated annotation as direct-only support.
            paths = {term: (1.0, [], [term])}
        else:
            paths = closure(term, edges, PREDICATES[ontology])
        for ancestor, (weight, predicates, nodes) in paths.items():
            row = support[(ontology, ancestor)].setdefault(disease, {
                "direct": 0.0, "propagated": 0.0, "best": (0.0, "", [], []),
                "terms": set(), "nodes": set()})
            field = "direct" if ancestor == term else "propagated"
            row[field] = max(row[field], weight)
            if weight > row["best"][0]:
                row["best"] = (weight, term, predicates, nodes)
            row["terms"].add(term)
            row["nodes"].add(node)
    population = sum(e["kind"] == "disease" for e in entities.values())
    rows = []
    for (ontology, term), diseases in sorted(support.items()):
        labels = ontologies[ontology][0]
        specificity = math.log1p(population / len(diseases)) / math.log1p(population)
        for disease, support_row in sorted(diseases.items()):
            entity = entities[disease]
            best, source, predicates, nodes = support_row["best"]
            rows.append({"ontology": ontology, "disorder_name": entity["name"],
                         "disease_term_id": entity["mondo"], "source_file": entity["source_file"],
                         "term_id": term, "term_label": labels.get(term, term),
                         "score": max(support_row['direct'], support_row['propagated']) * specificity,
                         "direct_score": support_row["direct"], "propagated_score": support_row["propagated"],
                         "specificity": specificity, "is_direct": bool(support_row['direct']),
                         "best_source_term_id": source, "best_source_term_label": labels.get(source, source),
                         "best_source_path_score": best,
                         "best_source_path": " -> ".join(nodes), "best_path_hops": len(predicates),
                         **{f"best_path_{p}_hops": predicates.count(p) for p in ('is_a', 'develops_from', 'part_of')},
                         "supporting_source_term_ids": "|".join(sorted(support_row['terms'])),
                         "supporting_source_term_labels": "|".join(labels.get(t, t) for t in sorted(support_row['terms'])),
                         "supporting_source_node_names": "|".join(sorted(support_row['nodes']))})
    return rows, unknown


def export_scores(rows, target: Path):
    target.mkdir(parents=True, exist_ok=True)
    if not rows:
        raise ValueError("No ontology associations generated")
    for name in ("context", *PREFIXES):
        with (target / f"{name}_scores.tsv").open("w") as stream:
            writer = csv.DictWriter(stream, fieldnames=list(rows[0]), delimiter="\t")
            writer.writeheader()
            writer.writerows(rows if name == "context" else (r for r in rows if r['ontology'] == name))


def cached_vectors(texts, cache: Path, signature, encode):
    """The cache is a text->vector lookup, never the entity inventory."""
    cache.parent.mkdir(parents=True, exist_ok=True)
    keys = [digest(canonical([signature, text]).encode()) for text in texts]
    with sqlite3.connect(cache) as connection:
        connection.execute("CREATE TABLE IF NOT EXISTS vectors (key TEXT PRIMARY KEY, vector TEXT NOT NULL)")
        found = {}
        for key in set(keys):
            row = connection.execute("SELECT vector FROM vectors WHERE key=?", (key,)).fetchone()
            if row:
                found[key] = json.loads(row[0])
        missing = dict((key, text) for key, text in zip(keys, texts) if key not in found)
        if missing:
            vectors = np.asarray(encode(list(missing.values())), dtype=np.float32)
            if vectors.ndim != 2 or vectors.shape[0] != len(missing) or not np.isfinite(vectors).all():
                raise ValueError("Invalid model output")
            for key, vector in zip(missing, vectors.tolist()):
                connection.execute("INSERT OR REPLACE INTO vectors VALUES (?, ?)", (key, canonical(vector)))
                found[key] = vector
        result = np.asarray([found[key] for key in keys], dtype=np.float32)
    if result.ndim != 2 or not np.isfinite(result).all():
        raise ValueError("Invalid cached vectors")
    return result


def project_and_neighbors(ids, vectors, k=10):
    from sklearn.decomposition import PCA

    norms = np.linalg.norm(vectors, axis=1, keepdims=True)
    if np.any(norms == 0):
        raise ValueError("Zero vector in active inventory")
    unit = vectors / norms
    if len(ids) >= 2:
        coordinates = PCA(n_components=min(2, len(ids), vectors.shape[1]), svd_solver="full").fit_transform(unit)
        if coordinates.shape[1] == 1:
            coordinates = np.column_stack((coordinates, np.zeros(len(ids))))
    else:
        coordinates = np.zeros((len(ids), 2))
    points = []
    for start in range(0, len(ids), 256):
        sims = unit[start:start + 256] @ unit.T
        for offset, scores in enumerate(sims):
            i = start + offset
            scores[i] = -np.inf
            count = min(k, len(ids) - 1)
            top = np.argpartition(-scores, count)[:count] if count else []
            ordered = sorted(top, key=lambda j: (-float(scores[j]), ids[j]))
            points.append({"id": ids[i], "xy": coordinates[i].round(6).tolist(),
                           "neighbors": [{"id": ids[j], "cosine": round(float(scores[j]), 6)} for j in ordered]})
    return points


def embedding_spaces(entities, config, cache, encode=None):
    signature = {"model": config['model'], "revision": config['model_revision'], "text_version": TEXT_VERSION, "max_length": None}
    if encode is None:
        from model2vec import StaticModel
        from huggingface_hub import snapshot_download
        model_path = snapshot_download(config['model'], revision=config['model_revision'])
        model = StaticModel.from_pretrained(model_path)
        def encode(texts):
            return model.encode(texts, max_length=None, use_multiprocessing=False)
    spaces = {}
    for name in ("pathophysiology", "phenotypes", "treatments", "celltypes", "mechanisms"):
        candidates = sorted(e['id'] for e in entities.values() if name in e['spaces'])
        active = [key for key in candidates if entities[key]['spaces'][name].strip()]
        active_set = set(active)
        excluded = [{"id": key, "reason": "No text in this representation"} for key in candidates if key not in active_set]
        texts = [entities[key]['spaces'][name] for key in active]
        if not active:
            spaces[name] = {"points": [], "excluded": excluded, "eligible_count": len(candidates), **signature}
            continue
        vectors = cached_vectors(texts, cache, signature, encode)
        # Empty lexical vectors are explicit exclusions (e.g. punctuation-only names).
        valid = np.linalg.norm(vectors, axis=1) > 0
        excluded.extend({"id": active[i], "reason": "Model produced a zero vector"} for i in np.flatnonzero(~valid))
        active = [key for i, key in enumerate(active) if valid[i]]
        vectors = vectors[valid]
        points = project_and_neighbors(active, vectors) if active else []
        spaces[name] = {"points": points, "excluded": excluded, "eligible_count": len(candidates),
                        "dimension": vectors.shape[1], "projection": "PCA of unit vectors (2D, full SVD)",
                        "neighbor_metric": "cosine in original vector space", **signature}
        print(f"{name}: {len(points)} represented, {len(excluded)} excluded", flush=True)
    return spaces
