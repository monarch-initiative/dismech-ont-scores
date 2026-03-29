window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0021782"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0021782",
  "term_label": "glial cell development",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.230991,
  "mean_score": 0.141161,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "GO:0021782",
      "term_label": "glial cell development",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "GO:0021782",
      "term_label": "glial cell development",
      "score": 0.096246,
      "direct_score": 0.0,
      "propagated_score": 0.116667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "GO:0021782",
      "term_label": "glial cell development",
      "score": 0.096246,
      "direct_score": 0.0,
      "propagated_score": 0.116667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0022010",
      "best_source_term_label": "central nervous system myelination",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0021782" } }));
