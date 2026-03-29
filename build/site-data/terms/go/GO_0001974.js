window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001974"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001974",
  "term_label": "blood vessel remodeling",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.561304,
  "mean_score": 0.561304,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0001974",
      "term_label": "blood vessel remodeling",
      "score": 0.561304,
      "direct_score": 0.561304,
      "propagated_score": 0.561304,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001974",
      "best_source_term_label": "blood vessel remodeling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001974"
      ],
      "supporting_source_term_labels": [
        "blood vessel remodeling"
      ],
      "supporting_source_node_names": [
        "Diabetic renal hemodynamic dysregulation",
        "Endothelial dysfunction",
        "Macrovascular atherosclerotic disease",
        "Neural microvascular injury",
        "Renal microvascular injury",
        "Retinal microvascular injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001974" } }));
