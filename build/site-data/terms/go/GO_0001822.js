window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001822"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001822",
  "term_label": "kidney development",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.737476,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Jeune Asphyxiating Thoracic Dystrophy",
      "disease_term_id": "MONDO:0018770",
      "source_file": "Jeune_Asphyxiating_Thoracic_Dystrophy.yaml",
      "term_id": "GO:0001822",
      "term_label": "kidney development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0001822",
      "best_source_term_label": "kidney development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001822"
      ],
      "supporting_source_term_labels": [
        "kidney development"
      ],
      "supporting_source_node_names": [
        "Renal Cystogenesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Orofaciodigital Syndrome Type I",
      "disease_term_id": "MONDO:0010702",
      "source_file": "Orofaciodigital_Syndrome_Type_I.yaml",
      "term_id": "GO:0001822",
      "term_label": "kidney development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0001822",
      "best_source_term_label": "kidney development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001822"
      ],
      "supporting_source_term_labels": [
        "kidney development"
      ],
      "supporting_source_node_names": [
        "Renal Cystogenesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "GO:0001822",
      "term_label": "kidney development",
      "score": 0.212429,
      "direct_score": 0.0,
      "propagated_score": 0.2575,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001656",
      "best_source_term_label": "metanephros development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001656",
        "GO:0072006"
      ],
      "supporting_source_term_labels": [
        "metanephros development",
        "nephron development"
      ],
      "supporting_source_node_names": [
        "Blocked Nephron Differentiation",
        "WT1 Inactivation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001822" } }));
