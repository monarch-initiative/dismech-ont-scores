window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002432"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002432",
  "term_label": "granuloma formation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Coccidioidomycosis",
      "disease_term_id": "MONDO:0005706",
      "source_file": "Coccidioidomycosis.yaml",
      "term_id": "GO:0002432",
      "term_label": "granuloma formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002432",
      "best_source_term_label": "granuloma formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0002432",
      "term_label": "granuloma formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002432",
      "best_source_term_label": "granuloma formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002432"
      ],
      "supporting_source_term_labels": [
        "granuloma formation"
      ],
      "supporting_source_node_names": [
        "Granuloma Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002432" } }));
