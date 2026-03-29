window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002544"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002544",
  "term_label": "chronic inflammatory response",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 0.412484,
  "mean_score": 0.3861,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Coccidioidomycosis",
      "disease_term_id": "MONDO:0005706",
      "source_file": "Coccidioidomycosis.yaml",
      "term_id": "GO:0002544",
      "term_label": "chronic inflammatory response",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0002432",
      "best_source_term_label": "granuloma formation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0002432"
      ],
      "supporting_source_term_labels": [
        "granuloma formation"
      ],
      "supporting_source_node_names": [
        "Granuloma formation and containment"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Sarcoidosis",
      "disease_term_id": "MONDO:0019338",
      "source_file": "Sarcoidosis.yaml",
      "term_id": "GO:0002544",
      "term_label": "chronic inflammatory response",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0002432",
      "best_source_term_label": "granuloma formation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0002432"
      ],
      "supporting_source_term_labels": [
        "granuloma formation"
      ],
      "supporting_source_node_names": [
        "Granuloma Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hepatitis C",
      "disease_term_id": "MONDO:0005231",
      "source_file": "Hepatitis_C.yaml",
      "term_id": "GO:0002544",
      "term_label": "chronic inflammatory response",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0002544",
      "best_source_term_label": "chronic inflammatory response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002544"
      ],
      "supporting_source_term_labels": [
        "chronic inflammatory response"
      ],
      "supporting_source_node_names": [
        "Chronic Inflammation and Fibrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002544" } }));
