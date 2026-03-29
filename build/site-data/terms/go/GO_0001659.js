window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001659"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001659",
  "term_label": "temperature homeostasis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "GO:0001659",
      "term_label": "temperature homeostasis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001659",
      "best_source_term_label": "temperature homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001659"
      ],
      "supporting_source_term_labels": [
        "temperature homeostasis"
      ],
      "supporting_source_node_names": [
        "Sympathetic Nervous System Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001659" } }));
