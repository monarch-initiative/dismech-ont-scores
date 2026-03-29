window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001969"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001969",
  "term_label": "blood plasma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.595238,
  "mean_score": 0.595238,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "UBERON:0001969",
      "term_label": "blood plasma",
      "score": 0.595238,
      "direct_score": 0.595238,
      "propagated_score": 0.595238,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001969",
      "best_source_term_label": "blood plasma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001969"
      ],
      "supporting_source_term_labels": [
        "blood plasma"
      ],
      "supporting_source_node_names": [
        "TTR Tetramer Destabilization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001969" } }));
