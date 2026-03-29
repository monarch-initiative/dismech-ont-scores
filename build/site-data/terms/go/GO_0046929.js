window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046929"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046929",
  "term_label": "negative regulation of neurotransmitter secretion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tetanus",
      "disease_term_id": "MONDO:0005526",
      "source_file": "Tetanus.yaml",
      "term_id": "GO:0046929",
      "term_label": "negative regulation of neurotransmitter secretion",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0046929",
      "best_source_term_label": "negative regulation of neurotransmitter secretion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046929"
      ],
      "supporting_source_term_labels": [
        "negative regulation of neurotransmitter secretion"
      ],
      "supporting_source_node_names": [
        "Tetanus Toxin (Tetanospasmin) Action"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046929" } }));
