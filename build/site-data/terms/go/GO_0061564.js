window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061564"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061564",
  "term_label": "axon development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0061564",
      "term_label": "axon development",
      "score": 0.25,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0007409",
      "best_source_term_label": "axonogenesis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007409"
      ],
      "supporting_source_term_labels": [
        "axonogenesis"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061564" } }));
