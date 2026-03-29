window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003343"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003343",
  "term_label": "mucosa of oral region",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.083333,
  "mean_score": 0.083333,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0003343",
      "term_label": "mucosa of oral region",
      "score": 0.083333,
      "direct_score": 0.083333,
      "propagated_score": 0.083333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003343",
      "best_source_term_label": "mucosa of oral region",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003343"
      ],
      "supporting_source_term_labels": [
        "mucosa of oral region"
      ],
      "supporting_source_node_names": [
        "Mucosal Origins and Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003343" } }));
