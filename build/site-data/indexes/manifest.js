window.ontologyScoresManifest = {
  "generated_at": "2026-03-29T22:25:19.543544+00:00",
  "raw_dir": "data/context_scores/raw",
  "output_dir": "build/site-data",
  "dismech_dir": "/Users/cjm/repos/dismech",
  "dismech_sha": "c7158080b76a8791f3083c8adc0c410c1385065c",
  "total_rows": 59720,
  "total_terms": 5548,
  "ontology_row_counts": {
    "anatomy": 8679,
    "cell": 14472,
    "go": 17560,
    "phenotype": 19009
  },
  "ontology_term_counts": {
    "anatomy": 848,
    "cell": 548,
    "go": 1840,
    "phenotype": 2312
  },
  "downloads": [
    {
      "name": "anatomy_scores.tsv",
      "label": "Anatomy scores",
      "path": "downloads/anatomy_scores.tsv",
      "size_bytes": 2921015
    },
    {
      "name": "cell_scores.tsv",
      "label": "Cell scores",
      "path": "downloads/cell_scores.tsv",
      "size_bytes": 4750510
    },
    {
      "name": "context_scores.tsv",
      "label": "All ontology scores",
      "path": "downloads/context_scores.tsv",
      "size_bytes": 19187670
    },
    {
      "name": "go_scores.tsv",
      "label": "GO scores",
      "path": "downloads/go_scores.tsv",
      "size_bytes": 5946000
    },
    {
      "name": "phenotype_scores.tsv",
      "label": "Phenotype scores",
      "path": "downloads/phenotype_scores.tsv",
      "size_bytes": 5571300
    }
  ]
};
window.dispatchEvent(new Event('ontologyScoresManifestReady'));
