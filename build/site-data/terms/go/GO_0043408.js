window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043408"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043408",
  "term_label": "regulation of MAPK cascade",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28,
  "mean_score": 0.28,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "GO:0043408",
      "term_label": "regulation of MAPK cascade",
      "score": 0.28,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0070372",
      "best_source_term_label": "regulation of ERK1 and ERK2 cascade",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043408" } }));
