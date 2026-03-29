#!/usr/bin/env python3
"""Materialize browser-friendly ontology score shards from raw TSV exports."""

from __future__ import annotations

import argparse
import csv
import json
import shutil
import subprocess
from collections import defaultdict
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


ONTOLOGY_META = {
    "cell": {
        "label": "Cell Types",
        "short_label": "Cell",
        "description": "Disease priors projected onto Cell Ontology terms.",
        "prefix": "CL",
    },
    "anatomy": {
        "label": "Anatomy",
        "short_label": "Anatomy",
        "description": "Disease priors projected onto UBERON anatomical terms.",
        "prefix": "UBERON",
    },
    "go": {
        "label": "Biological Processes",
        "short_label": "GO",
        "description": "Disease priors projected onto Gene Ontology process terms.",
        "prefix": "GO",
    },
    "phenotype": {
        "label": "Phenotypes",
        "short_label": "HPO",
        "description": "Disease priors projected onto Human Phenotype Ontology terms.",
        "prefix": "HP",
    },
}

DOWNLOAD_LABELS = {
    "context_scores": "All ontology scores",
    "cell_scores": "Cell scores",
    "anatomy_scores": "Anatomy scores",
    "go_scores": "GO scores",
    "phenotype_scores": "Phenotype scores",
}


@dataclass
class TermRecord:
    ontology: str
    term_id: str
    term_label: str
    rows: list[dict]

    @property
    def disease_count(self) -> int:
        return len(self.rows)

    @property
    def direct_disease_count(self) -> int:
        return sum(1 for row in self.rows if row["is_direct"])

    @property
    def top_score(self) -> float:
        return max((row["score"] for row in self.rows), default=0.0)

    @property
    def mean_score(self) -> float:
        if not self.rows:
            return 0.0
        return sum(row["score"] for row in self.rows) / len(self.rows)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw-dir", required=True, help="Directory containing raw TSV exports")
    parser.add_argument("--output-dir", required=True, help="Directory for browser JSON shards")
    parser.add_argument("--dismech-dir", default="", help="Path to the source dismech checkout")
    parser.add_argument(
        "--write-json",
        action="store_true",
        help="Also emit JSON copies of indexes and term shards for debugging",
    )
    return parser.parse_args()


def to_float(value: str) -> float:
    return float(value or 0.0)


def to_int(value: str) -> int:
    return int(value or 0)


def to_bool(value: str) -> bool:
    return value.strip().lower() == "true"


def split_pipe(value: str) -> list[str]:
    return [part for part in (value or "").split("|") if part]


def safe_term_id(term_id: str) -> str:
    return term_id.replace(":", "_").replace("/", "_")


def read_context_rows(path: Path) -> list[dict]:
    rows: list[dict] = []
    with open(path, newline="", encoding="utf-8") as stream:
        reader = csv.DictReader(stream, delimiter="\t")
        for row in reader:
            rows.append(
                {
                    "ontology": row["ontology"],
                    "disorder_name": row["disorder_name"],
                    "disease_term_id": row["disease_term_id"],
                    "source_file": row["source_file"],
                    "term_id": row["term_id"],
                    "term_label": row["term_label"],
                    "score": to_float(row["score"]),
                    "direct_score": to_float(row["direct_score"]),
                    "propagated_score": to_float(row["propagated_score"]),
                    "specificity": to_float(row["specificity"]),
                    "is_direct": to_bool(row["is_direct"]),
                    "best_source_term_id": row["best_source_term_id"],
                    "best_source_term_label": row["best_source_term_label"],
                    "best_source_path_score": to_float(row["best_source_path_score"]),
                    "best_source_path": row["best_source_path"],
                    "best_path_hops": to_int(row["best_path_hops"]),
                    "best_path_is_a_hops": to_int(row["best_path_is_a_hops"]),
                    "best_path_develops_from_hops": to_int(row["best_path_develops_from_hops"]),
                    "best_path_part_of_hops": to_int(row["best_path_part_of_hops"]),
                    "supporting_source_term_ids": split_pipe(row["supporting_source_term_ids"]),
                    "supporting_source_term_labels": split_pipe(row["supporting_source_term_labels"]),
                    "supporting_source_node_names": split_pipe(row["supporting_source_node_names"]),
                }
            )
    return rows


def git_sha(path: Path) -> str:
    try:
        return subprocess.check_output(
            ["git", "-C", str(path), "rev-parse", "HEAD"],
            text=True,
        ).strip()
    except Exception:
        return ""


def build_term_records(rows: list[dict]) -> dict[tuple[str, str], TermRecord]:
    grouped: dict[tuple[str, str], list[dict]] = defaultdict(list)
    labels: dict[tuple[str, str], str] = {}
    for row in rows:
        key = (row["ontology"], row["term_id"])
        grouped[key].append(row)
        labels[key] = row["term_label"]

    records: dict[tuple[str, str], TermRecord] = {}
    for key, grouped_rows in grouped.items():
        grouped_rows.sort(
            key=lambda row: (
                -row["score"],
                -row["direct_score"],
                row["disorder_name"].lower(),
            )
        )
        records[key] = TermRecord(
            ontology=key[0],
            term_id=key[1],
            term_label=labels[key],
            rows=grouped_rows,
        )
    return records


def make_manifest(
    raw_dir: Path,
    output_dir: Path,
    dismech_dir: Path | None,
    rows: list[dict],
    terms: dict[tuple[str, str], TermRecord],
    downloads: list[dict],
) -> dict:
    ontology_row_counts: dict[str, int] = defaultdict(int)
    ontology_term_counts: dict[str, int] = defaultdict(int)
    for row in rows:
        ontology_row_counts[row["ontology"]] += 1
    for ontology, _term_id in terms:
        ontology_term_counts[ontology] += 1

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "raw_dir": str(raw_dir),
        "output_dir": str(output_dir),
        "dismech_dir": str(dismech_dir) if dismech_dir else "",
        "dismech_sha": git_sha(dismech_dir) if dismech_dir else "",
        "total_rows": len(rows),
        "total_terms": len(terms),
        "ontology_row_counts": dict(sorted(ontology_row_counts.items())),
        "ontology_term_counts": dict(sorted(ontology_term_counts.items())),
        "downloads": downloads,
    }


def build_downloads(raw_dir: Path, output_dir: Path) -> list[dict]:
    downloads_dir = output_dir / "downloads"
    downloads_dir.mkdir(parents=True, exist_ok=True)

    downloads: list[dict] = []
    for path in sorted(raw_dir.glob("*.tsv")):
        target = downloads_dir / path.name
        shutil.copy2(path, target)
        stem = path.stem
        downloads.append(
            {
                "name": path.name,
                "label": DOWNLOAD_LABELS.get(stem, stem.replace("_", " ").title()),
                "path": f"downloads/{path.name}",
                "size_bytes": path.stat().st_size,
            }
        )
    return downloads


def write_json(path: Path, payload: dict | list) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=False) + "\n", encoding="utf-8")


def write_js_assignment(path: Path, statement: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(statement + "\n", encoding="utf-8")


def write_js_global(path: Path, global_name: str, payload: dict | list, event_name: str) -> None:
    json_payload = json.dumps(payload, indent=2, sort_keys=False)
    statement = f"window.{global_name} = {json_payload};\nwindow.dispatchEvent(new Event('{event_name}'));"
    write_js_assignment(path, statement)


def write_term_shard_js(path: Path, cache_key: str, payload: dict) -> None:
    json_payload = json.dumps(payload, indent=2, sort_keys=False)
    statement = (
        "window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};\n"
        f"window.ontologyScoresTermShards[{json.dumps(cache_key)}] = {json_payload};\n"
        f"window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', {{ detail: {{ key: {json.dumps(cache_key)} }} }}));"
    )
    write_js_assignment(path, statement)


def top_terms_for_ontology(term_records: list[TermRecord], limit: int = 12) -> list[dict]:
    ranked = sorted(
        term_records,
        key=lambda record: (-record.top_score, -record.direct_disease_count, -record.disease_count, record.term_label.lower()),
    )
    return [
        {
            "term_id": record.term_id,
            "term_label": record.term_label,
            "top_score": round(record.top_score, 6),
            "disease_count": record.disease_count,
            "direct_disease_count": record.direct_disease_count,
            "shard_path": f"terms/{record.ontology}/{safe_term_id(record.term_id)}.js",
        }
        for record in ranked[:limit]
    ]


def build_indexes(
    output_dir: Path,
    rows: list[dict],
    terms: dict[tuple[str, str], TermRecord],
    manifest: dict,
    *,
    write_json_files: bool,
) -> None:
    index_dir = output_dir / "indexes"
    term_index: list[dict] = []
    ontology_sections: list[dict] = []

    grouped_by_ontology: dict[str, list[TermRecord]] = defaultdict(list)
    for record in terms.values():
        grouped_by_ontology[record.ontology].append(record)
        term_index.append(
            {
                "ontology": record.ontology,
                "ontology_label": ONTOLOGY_META[record.ontology]["label"],
                "term_id": record.term_id,
                "term_label": record.term_label,
                "disease_count": record.disease_count,
                "direct_disease_count": record.direct_disease_count,
                "top_score": round(record.top_score, 6),
                "mean_score": round(record.mean_score, 6),
                "shard_path": f"terms/{record.ontology}/{safe_term_id(record.term_id)}.js",
            }
        )

    term_index.sort(
        key=lambda row: (
            row["ontology_label"].lower(),
            row["term_label"].lower(),
            row["term_id"],
        )
    )

    for ontology_key, meta in ONTOLOGY_META.items():
        ontology_terms = grouped_by_ontology.get(ontology_key, [])
        ontology_sections.append(
            {
                "ontology": ontology_key,
                "label": meta["label"],
                "short_label": meta["short_label"],
                "description": meta["description"],
                "prefix": meta["prefix"],
                "term_count": len(ontology_terms),
                "row_count": manifest["ontology_row_counts"].get(ontology_key, 0),
                "top_terms": top_terms_for_ontology(ontology_terms),
            }
        )

    overview = {
        "generated_at": manifest["generated_at"],
        "dismech_sha": manifest["dismech_sha"],
        "total_rows": manifest["total_rows"],
        "total_terms": manifest["total_terms"],
        "ontologies": ontology_sections,
    }

    if write_json_files:
        write_json(index_dir / "manifest.json", manifest)
        write_json(index_dir / "overview.json", overview)
        write_json(index_dir / "term_index.json", term_index)
    write_js_global(index_dir / "manifest.js", "ontologyScoresManifest", manifest, "ontologyScoresManifestReady")
    write_js_global(index_dir / "overview.js", "ontologyScoresOverview", overview, "ontologyScoresOverviewReady")
    write_js_global(index_dir / "term_index.js", "ontologyScoresTermIndex", term_index, "ontologyScoresTermIndexReady")


def write_term_shards(output_dir: Path, terms: dict[tuple[str, str], TermRecord], *, write_json_files: bool) -> None:
    for record in terms.values():
        payload = {
            "ontology": record.ontology,
            "ontology_label": ONTOLOGY_META[record.ontology]["label"],
            "term_id": record.term_id,
            "term_label": record.term_label,
            "disease_count": record.disease_count,
            "direct_disease_count": record.direct_disease_count,
            "top_score": round(record.top_score, 6),
            "mean_score": round(record.mean_score, 6),
            "diseases": record.rows,
        }
        shard_dir = output_dir / "terms" / record.ontology
        stem = safe_term_id(record.term_id)
        cache_key = f"{record.ontology}::{record.term_id}"
        if write_json_files:
            write_json(shard_dir / f"{stem}.json", payload)
        write_term_shard_js(shard_dir / f"{stem}.js", cache_key, payload)


def main() -> None:
    args = parse_args()
    raw_dir = Path(args.raw_dir)
    output_dir = Path(args.output_dir)
    dismech_dir = Path(args.dismech_dir).resolve() if args.dismech_dir else None

    context_scores_path = raw_dir / "context_scores.tsv"
    if not context_scores_path.exists():
        raise SystemExit(f"Missing expected file: {context_scores_path}")

    rows = read_context_rows(context_scores_path)
    terms = build_term_records(rows)
    downloads = build_downloads(raw_dir, output_dir)
    manifest = make_manifest(raw_dir, output_dir, dismech_dir, rows, terms, downloads)

    write_term_shards(output_dir, terms, write_json_files=args.write_json)
    build_indexes(output_dir, rows, terms, manifest, write_json_files=args.write_json)

    print(f"Wrote {len(terms)} term shards to {output_dir}")
    print(f"Total rows: {len(rows)}")
    for ontology_key, count in manifest["ontology_term_counts"].items():
        print(f"  {ontology_key}: {count} terms")


if __name__ == "__main__":
    main()
