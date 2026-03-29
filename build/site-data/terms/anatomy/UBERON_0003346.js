window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003346"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003346",
  "term_label": "mucosa of rectum",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.357143,
  "mean_score": 0.357143,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0003346",
      "term_label": "mucosa of rectum",
      "score": 0.357143,
      "direct_score": 0.357143,
      "propagated_score": 0.357143,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003346",
      "best_source_term_label": "mucosa of rectum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003346"
      ],
      "supporting_source_term_labels": [
        "mucosa of rectum"
      ],
      "supporting_source_node_names": [
        "TL1A-Mediated T Cell Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003346" } }));
