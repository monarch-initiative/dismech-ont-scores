window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003016"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003016",
  "term_label": "respiratory system process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.478884,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "GO:0003016",
      "term_label": "respiratory system process",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0120197",
      "best_source_term_label": "mucociliary clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0120197"
      ],
      "supporting_source_term_labels": [
        "mucociliary clearance"
      ],
      "supporting_source_node_names": [
        "Impaired mucociliary clearance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "GO:0003016",
      "term_label": "respiratory system process",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0120197",
      "best_source_term_label": "mucociliary clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0120197"
      ],
      "supporting_source_term_labels": [
        "mucociliary clearance"
      ],
      "supporting_source_node_names": [
        "Impaired Mucociliary Clearance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "GO:0003016",
      "term_label": "respiratory system process",
      "score": 0.281696,
      "direct_score": 0.0,
      "propagated_score": 0.341463,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0120197",
      "best_source_term_label": "mucociliary clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0120197"
      ],
      "supporting_source_term_labels": [
        "mucociliary clearance"
      ],
      "supporting_source_node_names": [
        "Impaired Mucociliary Clearance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003016" } }));
