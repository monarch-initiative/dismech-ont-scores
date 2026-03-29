window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050973"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050973",
  "term_label": "detection of mechanical stimulus involved in equilibrioception",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "GO:0050973",
      "term_label": "detection of mechanical stimulus involved in equilibrioception",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0050973",
      "best_source_term_label": "detection of mechanical stimulus involved in equilibrioception",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050973"
      ],
      "supporting_source_term_labels": [
        "detection of mechanical stimulus involved in equilibrioception"
      ],
      "supporting_source_node_names": [
        "Third Window Effect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050973" } }));
