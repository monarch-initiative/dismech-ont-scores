window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0022010"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0022010",
  "term_label": "central nervous system myelination",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 0.8,
  "mean_score": 0.488889,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "GO:0022010",
      "term_label": "central nervous system myelination",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0022010",
      "term_label": "central nervous system myelination",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0022010",
      "term_label": "central nervous system myelination",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0022010" } }));
