window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002292"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002292",
  "term_label": "T cell differentiation involved in immune response",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.381167,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "GO:0002292",
      "term_label": "T cell differentiation involved in immune response",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0002292",
      "best_source_term_label": "T cell differentiation involved in immune response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002292"
      ],
      "supporting_source_term_labels": [
        "T cell differentiation involved in immune response"
      ],
      "supporting_source_node_names": [
        "Mucosal immune activation with intraepithelial lymphocytosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hidradenitis Suppurativa",
      "disease_term_id": "MONDO:0006559",
      "source_file": "Hidradenitis_Suppurativa.yaml",
      "term_id": "GO:0002292",
      "term_label": "T cell differentiation involved in immune response",
      "score": 0.279242,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0072539",
      "best_source_term_label": "T-helper 17 cell differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "GO:0002292",
      "term_label": "T cell differentiation involved in immune response",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045064",
      "best_source_term_label": "T-helper 2 cell differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045064"
      ],
      "supporting_source_term_labels": [
        "T-helper 2 cell differentiation"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "GO:0002292",
      "term_label": "T cell differentiation involved in immune response",
      "score": 0.109079,
      "direct_score": 0.0,
      "propagated_score": 0.14,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045064",
      "best_source_term_label": "T-helper 2 cell differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045064"
      ],
      "supporting_source_term_labels": [
        "T-helper 2 cell differentiation"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002292" } }));
