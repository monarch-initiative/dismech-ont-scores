window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006023"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006023",
  "term_label": "aminoglycan biosynthetic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.06125,
  "mean_score": 0.06125,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:0006023",
      "term_label": "aminoglycan biosynthetic process",
      "score": 0.06125,
      "direct_score": 0.0,
      "propagated_score": 0.06125,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0030213",
      "best_source_term_label": "hyaluronan biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030213"
      ],
      "supporting_source_term_labels": [
        "hyaluronan biosynthetic process"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006023" } }));
