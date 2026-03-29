window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009124"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009124",
  "term_label": "Abnormal adipose tissue morphology",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.61128,
  "mean_score": 0.432479,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0009124",
      "term_label": "Abnormal adipose tissue morphology",
      "score": 0.61128,
      "direct_score": 0.0,
      "propagated_score": 0.822074,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0009126",
      "best_source_term_label": "Increased adipose tissue",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001012",
        "HP:0009126",
        "HP:0025476"
      ],
      "supporting_source_term_labels": [
        "Increased adipose tissue",
        "Multiple lipomas",
        "Testicular lipomatosis"
      ],
      "supporting_source_node_names": [
        "Increased Adipose Tissue",
        "Lipomatous Overgrowth",
        "Testicular Lipomatosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Alpha-1 Antitrypsin Deficiency",
      "disease_term_id": "MONDO:0013282",
      "source_file": "Alpha_1_Antitrypsin_Deficiency.yaml",
      "term_id": "HP:0009124",
      "term_label": "Abnormal adipose tissue morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0012490",
      "best_source_term_label": "Panniculitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012490"
      ],
      "supporting_source_term_labels": [
        "Panniculitis"
      ],
      "supporting_source_node_names": [
        "Panniculitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Methylmalonic Acidemia",
      "disease_term_id": "MONDO:0002012",
      "source_file": "Methylmalonic_Acidemia.yaml",
      "term_id": "HP:0009124",
      "term_label": "Abnormal adipose tissue morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0009125",
      "best_source_term_label": "Lipodystrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009125"
      ],
      "supporting_source_term_labels": [
        "Lipodystrophy"
      ],
      "supporting_source_node_names": [
        "Lipodystrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Camurati-Engelmann Disease",
      "disease_term_id": "MONDO:0007542",
      "source_file": "Camurati-Engelmann_Disease.yaml",
      "term_id": "HP:0009124",
      "term_label": "Abnormal adipose tissue morphology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0003717",
      "best_source_term_label": "Minimal subcutaneous fat",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003717"
      ],
      "supporting_source_term_labels": [
        "Minimal subcutaneous fat"
      ],
      "supporting_source_node_names": [
        "Reduced Subcutaneous Fat"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0009124",
      "term_label": "Abnormal adipose tissue morphology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0012032",
      "best_source_term_label": "Lipoma",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012032"
      ],
      "supporting_source_term_labels": [
        "Lipoma"
      ],
      "supporting_source_node_names": [
        "Lipoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009124" } }));
