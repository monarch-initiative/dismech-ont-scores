window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001654"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001654",
  "term_label": "Abnormal heart valve morphology",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.368332,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Mucopolysaccharidosis",
      "disease_term_id": "MONDO:0019249",
      "source_file": "Mucopolysaccharidosis.yaml",
      "term_id": "HP:0001654",
      "term_label": "Abnormal heart valve morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0001654",
      "best_source_term_label": "Abnormal heart valve morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001654"
      ],
      "supporting_source_term_labels": [
        "Abnormal heart valve morphology"
      ],
      "supporting_source_node_names": [
        "Cardiac Valve Disease"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ehlers-Danlos Syndrome, COL5A1-related",
      "disease_term_id": "MONDO:0007522",
      "source_file": "Ehlers-Danlos_Syndrome_COL5A1-related.yaml",
      "term_id": "HP:0001654",
      "term_label": "Abnormal heart valve morphology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001634",
      "best_source_term_label": "Mitral valve prolapse",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001634"
      ],
      "supporting_source_term_labels": [
        "Mitral valve prolapse"
      ],
      "supporting_source_node_names": [
        "Mitral Valve Prolapse"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0001654",
      "term_label": "Abnormal heart valve morphology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001634",
      "best_source_term_label": "Mitral valve prolapse",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001634"
      ],
      "supporting_source_term_labels": [
        "Mitral valve prolapse"
      ],
      "supporting_source_node_names": [
        "Mitral Valve Prolapse"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "HP:0001654",
      "term_label": "Abnormal heart valve morphology",
      "score": 0.204039,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001634",
      "best_source_term_label": "Mitral valve prolapse",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001634"
      ],
      "supporting_source_term_labels": [
        "Mitral valve prolapse"
      ],
      "supporting_source_node_names": [
        "Mitral Valve Prolapse"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ehlers-Danlos Syndrome",
      "disease_term_id": "MONDO:0020066",
      "source_file": "Ehlers-Danlos_Syndrome.yaml",
      "term_id": "HP:0001654",
      "term_label": "Abnormal heart valve morphology",
      "score": 0.127524,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001634",
      "best_source_term_label": "Mitral valve prolapse",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001634"
      ],
      "supporting_source_term_labels": [
        "Mitral valve prolapse"
      ],
      "supporting_source_node_names": [
        "Mitral Valve Prolapse"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001654" } }));
