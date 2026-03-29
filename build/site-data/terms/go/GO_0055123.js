window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0055123"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0055123",
  "term_label": "digestive system development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "GO:0055123",
      "term_label": "digestive system development",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0048565",
      "best_source_term_label": "digestive tract development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0048565"
      ],
      "supporting_source_term_labels": [
        "digestive tract development"
      ],
      "supporting_source_node_names": [
        "Failed foregut partitioning",
        "Foregut maldevelopment during respiratory and digestive tract development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0055123" } }));
