window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001844"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001844",
  "term_label": "Abnormal hallux morphology",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.585176,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fibrodysplasia Ossificans Progressiva",
      "disease_term_id": "MONDO:0007606",
      "source_file": "Fibrodysplasia_Ossificans_Progressiva.yaml",
      "term_id": "HP:0001844",
      "term_label": "Abnormal hallux morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0001844",
      "best_source_term_label": "Abnormal hallux morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001844"
      ],
      "supporting_source_term_labels": [
        "Abnormal hallux morphology"
      ],
      "supporting_source_node_names": [
        "Congenital Great Toe Malformation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jackson-Weiss Syndrome",
      "disease_term_id": "MONDO:0007400",
      "source_file": "Jackson-Weiss_Syndrome.yaml",
      "term_id": "HP:0001844",
      "term_label": "Abnormal hallux morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010055",
      "best_source_term_label": "Broad hallux",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010055"
      ],
      "supporting_source_term_labels": [
        "Broad hallux"
      ],
      "supporting_source_node_names": [
        "Broad Great Toes"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pfeiffer Syndrome",
      "disease_term_id": "MONDO:0007043",
      "source_file": "Pfeiffer_Syndrome.yaml",
      "term_id": "HP:0001844",
      "term_label": "Abnormal hallux morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010055",
      "best_source_term_label": "Broad hallux",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010055"
      ],
      "supporting_source_term_labels": [
        "Broad hallux"
      ],
      "supporting_source_node_names": [
        "Broad Great Toes"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0001844",
      "term_label": "Abnormal hallux morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010055",
      "best_source_term_label": "Broad hallux",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010055"
      ],
      "supporting_source_term_labels": [
        "Broad hallux"
      ],
      "supporting_source_node_names": [
        "Broad hallux"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0001844",
      "term_label": "Abnormal hallux morphology",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0010109",
      "best_source_term_label": "Short hallux",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010109"
      ],
      "supporting_source_term_labels": [
        "Short hallux"
      ],
      "supporting_source_node_names": [
        "Short Hallux"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001844" } }));
