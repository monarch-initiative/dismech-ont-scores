window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0110096"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0110096",
  "term_label": "cellular response to aldehyde",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0110096",
      "term_label": "cellular response to aldehyde",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0110096",
      "best_source_term_label": "cellular response to aldehyde",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0110096"
      ],
      "supporting_source_term_labels": [
        "cellular response to aldehyde"
      ],
      "supporting_source_node_names": [
        "Aldehyde-Induced Genotoxicity",
        "Differentiation-Induced Genotoxic Stress",
        "Hematopoietic Stem Cell Attrition"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0110096" } }));
