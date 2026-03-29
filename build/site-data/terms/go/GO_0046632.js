window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046632"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046632",
  "term_label": "alpha-beta T cell differentiation",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.144878,
  "mean_score": 0.090737,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hidradenitis Suppurativa",
      "disease_term_id": "MONDO:0006559",
      "source_file": "Hidradenitis_Suppurativa.yaml",
      "term_id": "GO:0046632",
      "term_label": "alpha-beta T cell differentiation",
      "score": 0.144878,
      "direct_score": 0.0,
      "propagated_score": 0.175616,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0072539",
      "best_source_term_label": "T-helper 17 cell differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "GO:0046632",
      "term_label": "alpha-beta T cell differentiation",
      "score": 0.070741,
      "direct_score": 0.0,
      "propagated_score": 0.08575,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045064",
      "best_source_term_label": "T-helper 2 cell differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "GO:0046632",
      "term_label": "alpha-beta T cell differentiation",
      "score": 0.056593,
      "direct_score": 0.0,
      "propagated_score": 0.0686,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045064",
      "best_source_term_label": "T-helper 2 cell differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046632" } }));
