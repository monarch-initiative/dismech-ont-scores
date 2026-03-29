window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030875"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030875",
  "term_label": "Abnormality of pulmonary circulation",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.362274,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0030875",
      "term_label": "Abnormality of pulmonary circulation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0004890",
      "best_source_term_label": "Elevated pulmonary artery pressure",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004890"
      ],
      "supporting_source_term_labels": [
        "Elevated pulmonary artery pressure"
      ],
      "supporting_source_node_names": [
        "Pulmonary Hypertension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0030875",
      "term_label": "Abnormality of pulmonary circulation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002204",
      "best_source_term_label": "Pulmonary embolism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002204"
      ],
      "supporting_source_term_labels": [
        "Pulmonary embolism"
      ],
      "supporting_source_node_names": [
        "Pulmonary embolism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "HP:0030875",
      "term_label": "Abnormality of pulmonary circulation",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002204",
      "best_source_term_label": "Pulmonary embolism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002204"
      ],
      "supporting_source_term_labels": [
        "Pulmonary embolism"
      ],
      "supporting_source_node_names": [
        "Pulmonary Embolism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "HP:0030875",
      "term_label": "Abnormality of pulmonary circulation",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002092",
      "best_source_term_label": "Pulmonary arterial hypertension",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002092"
      ],
      "supporting_source_term_labels": [
        "Pulmonary arterial hypertension"
      ],
      "supporting_source_node_names": [
        "Pulmonary hypertension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "HP:0030875",
      "term_label": "Abnormality of pulmonary circulation",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002092",
      "best_source_term_label": "Pulmonary arterial hypertension",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002092"
      ],
      "supporting_source_term_labels": [
        "Pulmonary arterial hypertension"
      ],
      "supporting_source_node_names": [
        "Pulmonary arterial hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030875" } }));
