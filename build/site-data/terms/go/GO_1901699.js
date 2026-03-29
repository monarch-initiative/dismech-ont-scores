window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1901699"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1901699",
  "term_label": "cellular response to nitrogen compound",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.266667,
  "mean_score": 0.16681,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Citrullinemia Type I",
      "disease_term_id": "MONDO:0008988",
      "source_file": "Citrullinemia_Type_I.yaml",
      "term_id": "GO:1901699",
      "term_label": "cellular response to nitrogen compound",
      "score": 0.266667,
      "direct_score": 0.266667,
      "propagated_score": 0.266667,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:1901699",
      "best_source_term_label": "cellular response to nitrogen compound",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1901699"
      ],
      "supporting_source_term_labels": [
        "cellular response to nitrogen compound"
      ],
      "supporting_source_node_names": [
        "Hyperammonemic neurotoxicity via astrocyte glutamine-osmotic injury"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:1901699",
      "term_label": "cellular response to nitrogen compound",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
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
      "term_id": "GO:1901699",
      "term_label": "cellular response to nitrogen compound",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
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
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "GO:1901699",
      "term_label": "cellular response to nitrogen compound",
      "score": 0.122057,
      "direct_score": 0.0,
      "propagated_score": 0.164147,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0007212",
      "best_source_term_label": "G protein-coupled dopamine receptor signaling pathway",
      "best_source_path_score": 0.1715,
      "best_source_path": "part_of > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007210",
        "GO:0007212"
      ],
      "supporting_source_term_labels": [
        "G protein-coupled dopamine receptor signaling pathway",
        "serotonin receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Monoamine Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:1901699",
      "term_label": "cellular response to nitrogen compound",
      "score": 0.080968,
      "direct_score": 0.0,
      "propagated_score": 0.108889,
      "specificity": 0.743583,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1901699" } }));
