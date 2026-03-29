window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001169"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001169",
  "term_label": "wall of large intestine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.125,
  "mean_score": 0.125,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001169",
      "term_label": "wall of large intestine",
      "score": 0.125,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003346",
      "best_source_term_label": "mucosa of rectum",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001169" } }));
