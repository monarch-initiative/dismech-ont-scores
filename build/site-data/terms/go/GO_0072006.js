window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072006"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072006",
  "term_label": "nephron development",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.2,
  "mean_score": 0.2,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "GO:0072006",
      "term_label": "nephron development",
      "score": 0.2,
      "direct_score": 0.2,
      "propagated_score": 0.2,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0072006",
      "best_source_term_label": "nephron development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072006"
      ],
      "supporting_source_term_labels": [
        "nephron development"
      ],
      "supporting_source_node_names": [
        "Blocked Nephron Differentiation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072006" } }));
