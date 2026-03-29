window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0005977"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0005977",
  "term_label": "glycogen metabolic process",
  "disease_count": 5,
  "direct_disease_count": 3,
  "top_score": 0.8,
  "mean_score": 0.485049,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lafora_Disease",
      "disease_term_id": "MONDO:0009697",
      "source_file": "Lafora_Disease.yaml",
      "term_id": "GO:0005977",
      "term_label": "glycogen metabolic process",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0005977",
      "best_source_term_label": "glycogen metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005977"
      ],
      "supporting_source_term_labels": [
        "glycogen metabolic process"
      ],
      "supporting_source_node_names": [
        "Lafora body formation through aberrant glycogen metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Argininosuccinic Aciduria",
      "disease_term_id": "MONDO:0008815",
      "source_file": "Argininosuccinic_Aciduria.yaml",
      "term_id": "GO:0005977",
      "term_label": "glycogen metabolic process",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0005977",
      "best_source_term_label": "glycogen metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005977"
      ],
      "supporting_source_term_labels": [
        "glycogen metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired hepatic glycogen metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cori Forbes Disease",
      "disease_term_id": "MONDO:0009291",
      "source_file": "Cori_Forbes_Disease.yaml",
      "term_id": "GO:0005977",
      "term_label": "glycogen metabolic process",
      "score": 0.594866,
      "direct_score": 0.333333,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005977",
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process",
        "glycogen metabolic process"
      ],
      "supporting_source_node_names": [
        "Hepatic glycogen accumulation and fibrosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pompe Disease",
      "disease_term_id": "MONDO:0009290",
      "source_file": "Pompe_Disease.yaml",
      "term_id": "GO:0005977",
      "term_label": "glycogen metabolic process",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process"
      ],
      "supporting_source_node_names": [
        "Lysosomal glycogen accumulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "GO:0005977",
      "term_label": "glycogen metabolic process",
      "score": 0.130127,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired glucose-6-phosphate hydrolysis and fasting hypoglycemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0005977" } }));
