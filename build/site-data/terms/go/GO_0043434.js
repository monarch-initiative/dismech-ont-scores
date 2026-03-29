window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043434"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043434",
  "term_label": "response to peptide hormone",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.202117,
  "mean_score": 0.164688,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0043434",
      "term_label": "response to peptide hormone",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008286",
      "best_source_term_label": "insulin receptor signaling pathway",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0008286"
      ],
      "supporting_source_term_labels": [
        "insulin receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Insulin Resistance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Type 2 Diabetes Mellitus",
      "disease_term_id": "MONDO:0005148",
      "source_file": "Type_2_Diabetes_Mellitus.yaml",
      "term_id": "GO:0043434",
      "term_label": "response to peptide hormone",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008286",
      "best_source_term_label": "insulin receptor signaling pathway",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0008286"
      ],
      "supporting_source_term_labels": [
        "insulin receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Insulin Resistance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0043434",
      "term_label": "response to peptide hormone",
      "score": 0.08983,
      "direct_score": 0.0,
      "propagated_score": 0.108889,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008286",
      "best_source_term_label": "insulin receptor signaling pathway",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0008286"
      ],
      "supporting_source_term_labels": [
        "insulin receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Peripheral insulin resistance in insulin-sensitive tissues",
        "Reduced peripheral glucose disposal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043434" } }));
