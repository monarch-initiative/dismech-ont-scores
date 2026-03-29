window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010785"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010785",
  "term_label": "Gonadal neoplasm",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.359151,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "HP:0010785",
      "term_label": "Gonadal neoplasm",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010788",
      "best_source_term_label": "Testicular neoplasm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010788"
      ],
      "supporting_source_term_labels": [
        "Testicular neoplasm"
      ],
      "supporting_source_node_names": [
        "Testicular Mass"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "HP:0010785",
      "term_label": "Gonadal neoplasm",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010618",
      "best_source_term_label": "Ovarian fibroma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010618"
      ],
      "supporting_source_term_labels": [
        "Ovarian fibroma"
      ],
      "supporting_source_node_names": [
        "Ovarian Fibroma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "HP:0010785",
      "term_label": "Gonadal neoplasm",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0025318",
      "best_source_term_label": "Ovarian carcinoma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025318"
      ],
      "supporting_source_term_labels": [
        "Ovarian carcinoma"
      ],
      "supporting_source_node_names": [
        "Ovarian Carcinoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "HP:0010785",
      "term_label": "Gonadal neoplasm",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010618",
      "best_source_term_label": "Ovarian fibroma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010618"
      ],
      "supporting_source_term_labels": [
        "Ovarian fibroma"
      ],
      "supporting_source_node_names": [
        "Ovarian Fibroma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "HP:0010785",
      "term_label": "Gonadal neoplasm",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0025318",
      "best_source_term_label": "Ovarian carcinoma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025318"
      ],
      "supporting_source_term_labels": [
        "Ovarian carcinoma"
      ],
      "supporting_source_node_names": [
        "Ovarian Cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010785" } }));
