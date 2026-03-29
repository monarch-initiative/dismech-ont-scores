window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000166"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000166",
  "term_label": "oral opening",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.041667,
  "mean_score": 0.041667,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0000166",
      "term_label": "oral opening",
      "score": 0.041667,
      "direct_score": 0.0,
      "propagated_score": 0.041667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003343",
      "best_source_term_label": "mucosa of oral region",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000166" } }));
