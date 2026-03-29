window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010927"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010927",
  "term_label": "Abnormal blood inorganic cation concentration",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.328327,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Adult T-Cell Leukemia/Lymphoma",
      "disease_term_id": "MONDO:0019471",
      "source_file": "Adult_T_Cell_Leukemia_Lymphoma.yaml",
      "term_id": "HP:0010927",
      "term_label": "Abnormal blood inorganic cation concentration",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003072",
      "best_source_term_label": "Hypercalcemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003072"
      ],
      "supporting_source_term_labels": [
        "Hypercalcemia"
      ],
      "supporting_source_node_names": [
        "Hypercalcemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "HP:0010927",
      "term_label": "Abnormal blood inorganic cation concentration",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002901",
      "best_source_term_label": "Hypocalcemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002901"
      ],
      "supporting_source_term_labels": [
        "Hypocalcemia"
      ],
      "supporting_source_node_names": [
        "Hypocalcemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "HP:0010927",
      "term_label": "Abnormal blood inorganic cation concentration",
      "score": 0.305421,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002901",
      "best_source_term_label": "Hypocalcemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002901"
      ],
      "supporting_source_term_labels": [
        "Hypocalcemia"
      ],
      "supporting_source_node_names": [
        "Hypocalcemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Myeloma",
      "disease_term_id": "MONDO:0009693",
      "source_file": "Multiple_Myeloma.yaml",
      "term_id": "HP:0010927",
      "term_label": "Abnormal blood inorganic cation concentration",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003072",
      "best_source_term_label": "Hypercalcemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003072"
      ],
      "supporting_source_term_labels": [
        "Hypercalcemia"
      ],
      "supporting_source_node_names": [
        "Hypercalcemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010927" } }));
