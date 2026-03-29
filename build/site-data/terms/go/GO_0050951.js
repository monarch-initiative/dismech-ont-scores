window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050951"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050951",
  "term_label": "sensory perception of temperature stimulus",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "GO:0050951",
      "term_label": "sensory perception of temperature stimulus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0050951",
      "best_source_term_label": "sensory perception of temperature stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050951"
      ],
      "supporting_source_term_labels": [
        "sensory perception of temperature stimulus"
      ],
      "supporting_source_node_names": [
        "Trigeminal neurosensory dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050951" } }));
