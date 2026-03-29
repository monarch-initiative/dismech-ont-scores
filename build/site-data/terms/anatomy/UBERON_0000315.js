window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000315"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000315",
  "term_label": "subarachnoid space",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.545455,
  "mean_score": 0.545455,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "UBERON:0000315",
      "term_label": "subarachnoid space",
      "score": 0.545455,
      "direct_score": 0.545455,
      "propagated_score": 0.545455,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000315",
      "best_source_term_label": "subarachnoid space",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000315"
      ],
      "supporting_source_term_labels": [
        "subarachnoid space"
      ],
      "supporting_source_node_names": [
        "Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000315" } }));
