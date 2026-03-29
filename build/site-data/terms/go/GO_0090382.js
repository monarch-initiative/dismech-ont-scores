window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090382"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090382",
  "term_label": "phagosome maturation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.666667,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tuberculosis",
      "disease_term_id": "MONDO:0018076",
      "source_file": "Tuberculosis.yaml",
      "term_id": "GO:0090382",
      "term_label": "phagosome maturation",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0090382",
      "best_source_term_label": "phagosome maturation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0090382"
      ],
      "supporting_source_term_labels": [
        "phagosome maturation"
      ],
      "supporting_source_node_names": [
        "Phagocytosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090382" } }));
