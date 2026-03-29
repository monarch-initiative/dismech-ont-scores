window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042092"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042092",
  "term_label": "type 2 immune response",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 0.384615,
  "mean_score": 0.29973,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0042092",
      "term_label": "type 2 immune response",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042092",
      "best_source_term_label": "type 2 immune response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042092"
      ],
      "supporting_source_term_labels": [
        "type 2 immune response"
      ],
      "supporting_source_node_names": [
        "Dysregulated Immune Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "GO:0042092",
      "term_label": "type 2 immune response",
      "score": 0.283583,
      "direct_score": 0.25,
      "propagated_score": 0.34375,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042092",
      "best_source_term_label": "type 2 immune response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042092",
        "GO:0045064"
      ],
      "supporting_source_term_labels": [
        "T-helper 2 cell differentiation",
        "type 2 immune response"
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
      "term_id": "GO:0042092",
      "term_label": "type 2 immune response",
      "score": 0.230991,
      "direct_score": 0.2,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042092",
      "best_source_term_label": "type 2 immune response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042092",
        "GO:0045064"
      ],
      "supporting_source_term_labels": [
        "T-helper 2 cell differentiation",
        "type 2 immune response"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042092" } }));
