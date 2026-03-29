window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001373"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001373",
  "term_label": "Joint dislocation",
  "disease_count": 5,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.566121,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type I",
      "disease_term_id": "MONDO:0007167",
      "source_file": "Atelosteogenesis_Type_I.yaml",
      "term_id": "HP:0001373",
      "term_label": "Joint dislocation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0001373",
      "best_source_term_label": "Joint dislocation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001373"
      ],
      "supporting_source_term_labels": [
        "Joint dislocation"
      ],
      "supporting_source_node_names": [
        "Joint Dislocation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ehlers-Danlos Syndrome, COL5A1-related",
      "disease_term_id": "MONDO:0007522",
      "source_file": "Ehlers-Danlos_Syndrome_COL5A1-related.yaml",
      "term_id": "HP:0001373",
      "term_label": "Joint dislocation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0001373",
      "best_source_term_label": "Joint dislocation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001373"
      ],
      "supporting_source_term_labels": [
        "Joint dislocation"
      ],
      "supporting_source_node_names": [
        "Recurrent Joint Dislocations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "HP:0001373",
      "term_label": "Joint dislocation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0005008",
      "best_source_term_label": "Large joint dislocations",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005008"
      ],
      "supporting_source_term_labels": [
        "Large joint dislocations"
      ],
      "supporting_source_node_names": [
        "Large Joint Dislocations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "HP:0001373",
      "term_label": "Joint dislocation",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001374",
      "best_source_term_label": "Congenital hip dislocation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001374"
      ],
      "supporting_source_term_labels": [
        "Congenital hip dislocation"
      ],
      "supporting_source_node_names": [
        "Congenital hip dislocation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "HP:0001373",
      "term_label": "Joint dislocation",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0003083",
      "best_source_term_label": "Dislocated radial head",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003083"
      ],
      "supporting_source_term_labels": [
        "Dislocated radial head"
      ],
      "supporting_source_node_names": [
        "Radial Head Dislocation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001373" } }));
