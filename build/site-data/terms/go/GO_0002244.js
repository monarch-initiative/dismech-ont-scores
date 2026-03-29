window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002244"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002244",
  "term_label": "hematopoietic progenitor cell differentiation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.263158,
  "mean_score": 0.263158,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0002244",
      "term_label": "hematopoietic progenitor cell differentiation",
      "score": 0.263158,
      "direct_score": 0.263158,
      "propagated_score": 0.263158,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0002244",
      "best_source_term_label": "hematopoietic progenitor cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002244"
      ],
      "supporting_source_term_labels": [
        "hematopoietic progenitor cell differentiation"
      ],
      "supporting_source_node_names": [
        "Differentiation-Induced Genotoxic Stress"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002244" } }));
