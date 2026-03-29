window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000828"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000828",
  "term_label": "Abnormality of the parathyroid gland",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.276788,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Mitochondrial Trifunctional Protein Deficiency",
      "disease_term_id": "MONDO:0012172",
      "source_file": "Mitochondrial_Trifunctional_Protein_Deficiency.yaml",
      "term_id": "HP:0000828",
      "term_label": "Abnormality of the parathyroid gland",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000829",
      "best_source_term_label": "Hypoparathyroidism",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000829"
      ],
      "supporting_source_term_labels": [
        "Hypoparathyroidism"
      ],
      "supporting_source_node_names": [
        "Hypoparathyroidism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "HP:0000828",
      "term_label": "Abnormality of the parathyroid gland",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0008198",
      "best_source_term_label": "Congenital hypoparathyroidism",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008198"
      ],
      "supporting_source_term_labels": [
        "Congenital hypoparathyroidism"
      ],
      "supporting_source_node_names": [
        "Hypoparathyroidism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Nephronophthisis",
      "disease_term_id": "MONDO:0019005",
      "source_file": "Nephronophthisis.yaml",
      "term_id": "HP:0000828",
      "term_label": "Abnormality of the parathyroid gland",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000867",
      "best_source_term_label": "Secondary hyperparathyroidism",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000867"
      ],
      "supporting_source_term_labels": [
        "Secondary hyperparathyroidism"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0000828",
      "term_label": "Abnormality of the parathyroid gland",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000843",
      "best_source_term_label": "Hyperparathyroidism",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000843"
      ],
      "supporting_source_term_labels": [
        "Hyperparathyroidism"
      ],
      "supporting_source_node_names": [
        "Primary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000828" } }));
