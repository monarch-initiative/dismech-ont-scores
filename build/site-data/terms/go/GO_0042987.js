window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042987"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042987",
  "term_label": "amyloid precursor protein catabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.466667,
  "mean_score": 0.466667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:0042987",
      "term_label": "amyloid precursor protein catabolic process",
      "score": 0.466667,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0034205",
      "best_source_term_label": "amyloid-beta formation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034205"
      ],
      "supporting_source_term_labels": [
        "amyloid-beta formation"
      ],
      "supporting_source_node_names": [
        "Amyloid Plaque Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042987" } }));
