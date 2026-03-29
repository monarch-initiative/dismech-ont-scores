window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000456"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000456",
  "term_label": "secretion of exocrine gland",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.084541,
  "mean_score": 0.084541,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bronchiectasis",
      "disease_term_id": "MONDO:0004822",
      "source_file": "Bronchiectasis.yaml",
      "term_id": "UBERON:0000456",
      "term_label": "secretion of exocrine gland",
      "score": 0.084541,
      "direct_score": 0.0,
      "propagated_score": 0.084541,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000912",
      "best_source_term_label": "mucus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000912"
      ],
      "supporting_source_term_labels": [
        "mucus"
      ],
      "supporting_source_node_names": [
        "Microbiome Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000456" } }));
