window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048709"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048709",
  "term_label": "oligodendrocyte differentiation",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.154754,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0048709",
      "term_label": "oligodendrocyte differentiation",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0048709",
      "best_source_term_label": "oligodendrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048709"
      ],
      "supporting_source_term_labels": [
        "oligodendrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Impaired Oligodendrocyte Maturation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "GO:0048709",
      "term_label": "oligodendrocyte differentiation",
      "score": 0.155827,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0022010"
      ],
      "supporting_source_term_labels": [
        "central nervous system myelination"
      ],
      "supporting_source_node_names": [
        "Defective CNS Myelination"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0048709",
      "term_label": "oligodendrocyte differentiation",
      "score": 0.064928,
      "direct_score": 0.0,
      "propagated_score": 0.083333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0022010"
      ],
      "supporting_source_term_labels": [
        "central nervous system myelination"
      ],
      "supporting_source_node_names": [
        "Demyelination"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Salla Disease",
      "disease_term_id": "MONDO:0011449",
      "source_file": "Salla_Disease.yaml",
      "term_id": "GO:0048709",
      "term_label": "oligodendrocyte differentiation",
      "score": 0.064928,
      "direct_score": 0.0,
      "propagated_score": 0.083333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0022010"
      ],
      "supporting_source_term_labels": [
        "central nervous system myelination"
      ],
      "supporting_source_node_names": [
        "Oligodendroglial Dysfunction and Hypomyelination"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048709" } }));
