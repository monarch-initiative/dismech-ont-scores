window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048015"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048015",
  "term_label": "phosphatidylinositol-mediated signaling",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.642857,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Melanoma_in_Congenital_Melanocytic_Nevus",
      "disease_term_id": "MONDO:0850110",
      "source_file": "Melanoma_in_Congenital_Melanocytic_Nevus.yaml",
      "term_id": "GO:0048015",
      "term_label": "phosphatidylinositol-mediated signaling",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0048015",
      "best_source_term_label": "phosphatidylinositol-mediated signaling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048015"
      ],
      "supporting_source_term_labels": [
        "phosphatidylinositol-mediated signaling"
      ],
      "supporting_source_node_names": [
        "PI3K-AKT-mTOR Pathway Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "PIK3CA-Mutant Breast Cancer",
      "disease_term_id": "MONDO:0004989",
      "source_file": "PIK3CA_Mutant_Breast_Cancer.yaml",
      "term_id": "GO:0048015",
      "term_label": "phosphatidylinositol-mediated signaling",
      "score": 0.285714,
      "direct_score": 0.285714,
      "propagated_score": 0.285714,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0048015",
      "best_source_term_label": "phosphatidylinositol-mediated signaling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048015"
      ],
      "supporting_source_term_labels": [
        "phosphatidylinositol-mediated signaling"
      ],
      "supporting_source_node_names": [
        "Constitutive PI3K-AKT Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048015" } }));
