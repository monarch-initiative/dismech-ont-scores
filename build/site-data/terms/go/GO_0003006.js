window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003006"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003006",
  "term_label": "developmental process involved in reproduction",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.35836,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "GO:0003006",
      "term_label": "developmental process involved in reproduction",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0007283",
      "best_source_term_label": "spermatogenesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007283"
      ],
      "supporting_source_term_labels": [
        "spermatogenesis"
      ],
      "supporting_source_node_names": [
        "Progressive Germ Cell Loss",
        "Testicular Microenvironment Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "GO:0003006",
      "term_label": "developmental process involved in reproduction",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0007281",
      "best_source_term_label": "germ cell development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007281"
      ],
      "supporting_source_term_labels": [
        "germ cell development"
      ],
      "supporting_source_node_names": [
        "Germ Cell Neoplasia In Situ (GCNIS)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "GO:0003006",
      "term_label": "developmental process involved in reproduction",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0060065",
      "best_source_term_label": "uterus development",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060065"
      ],
      "supporting_source_term_labels": [
        "uterus development"
      ],
      "supporting_source_node_names": [
        "Mullerian Duct Fusion Defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Campomelic Dysplasia",
      "disease_term_id": "MONDO:0007251",
      "source_file": "Campomelic_Dysplasia.yaml",
      "term_id": "GO:0003006",
      "term_label": "developmental process involved in reproduction",
      "score": 0.242904,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0030238",
      "best_source_term_label": "male sex determination",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030238"
      ],
      "supporting_source_term_labels": [
        "male sex determination"
      ],
      "supporting_source_node_names": [
        "Disrupted 46,XY Sex Determination"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "GO:0003006",
      "term_label": "developmental process involved in reproduction",
      "score": 0.143522,
      "direct_score": 0.0,
      "propagated_score": 0.193015,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0071514",
      "best_source_term_label": "genomic imprinting",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0071514"
      ],
      "supporting_source_term_labels": [
        "genomic imprinting"
      ],
      "supporting_source_node_names": [
        "GNAS Imprinting-Dependent Signaling Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003006" } }));
