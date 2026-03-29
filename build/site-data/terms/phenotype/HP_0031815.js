window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031815"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031815",
  "term_label": "Abnormal oral physiology",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.364356,
  "mean_score": 0.2944,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Green Tobacco Sickness",
      "disease_term_id": "",
      "source_file": "Green_Tobacco_Sickness.yaml",
      "term_id": "HP:0031815",
      "term_label": "Abnormal oral physiology",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0003781",
      "best_source_term_label": "Excessive salivation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003781"
      ],
      "supporting_source_term_labels": [
        "Excessive salivation"
      ],
      "supporting_source_node_names": [
        "Excessive Salivation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sjogren's Syndrome",
      "disease_term_id": "MONDO:0010030",
      "source_file": "Sjogrens_Syndrome.yaml",
      "term_id": "HP:0031815",
      "term_label": "Abnormal oral physiology",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0000217",
      "best_source_term_label": "Xerostomia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000217"
      ],
      "supporting_source_term_labels": [
        "Xerostomia"
      ],
      "supporting_source_node_names": [
        "Xerostomia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:0031815",
      "term_label": "Abnormal oral physiology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002307",
      "best_source_term_label": "Drooling",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002307"
      ],
      "supporting_source_term_labels": [
        "Drooling"
      ],
      "supporting_source_node_names": [
        "Drooling"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "HP:0031815",
      "term_label": "Abnormal oral physiology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0041051",
      "best_source_term_label": "Ageusia",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0041051"
      ],
      "supporting_source_term_labels": [
        "Ageusia"
      ],
      "supporting_source_node_names": [
        "Ageusia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "HP:0031815",
      "term_label": "Abnormal oral physiology",
      "score": 0.233188,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0000223",
      "best_source_term_label": "Abnormality of taste sensation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000223"
      ],
      "supporting_source_term_labels": [
        "Abnormality of taste sensation"
      ],
      "supporting_source_node_names": [
        "Abnormal taste sensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031815" } }));
