window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072539"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072539",
  "term_label": "T-helper 17 cell differentiation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.512,
  "mean_score": 0.512,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hidradenitis Suppurativa",
      "disease_term_id": "MONDO:0006559",
      "source_file": "Hidradenitis_Suppurativa.yaml",
      "term_id": "GO:0072539",
      "term_label": "T-helper 17 cell differentiation",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0072539",
      "best_source_term_label": "T-helper 17 cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072539"
      ],
      "supporting_source_term_labels": [
        "T-helper 17 cell differentiation"
      ],
      "supporting_source_node_names": [
        "Th17-Driven Adaptive Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072539" } }));
