window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051260"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051260",
  "term_label": "protein homooligomerization",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.546875,
  "mean_score": 0.546875,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0051260",
      "term_label": "protein homooligomerization",
      "score": 0.546875,
      "direct_score": 0.0,
      "propagated_score": 0.546875,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0051289",
      "best_source_term_label": "protein homotetramerization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051289"
      ],
      "supporting_source_term_labels": [
        "protein homotetramerization"
      ],
      "supporting_source_node_names": [
        "TTR Tetramer Destabilization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051260" } }));
