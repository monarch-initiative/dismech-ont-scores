window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070372"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070372",
  "term_label": "regulation of ERK1 and ERK2 cascade",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "GO:0070372",
      "term_label": "regulation of ERK1 and ERK2 cascade",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0070372",
      "best_source_term_label": "regulation of ERK1 and ERK2 cascade",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070372"
      ],
      "supporting_source_term_labels": [
        "regulation of ERK1 and ERK2 cascade"
      ],
      "supporting_source_node_names": [
        "ERK Cascade Hyperactivation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070372" } }));
