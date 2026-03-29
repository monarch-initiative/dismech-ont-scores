window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004769"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004769",
  "term_label": "diaphysis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Camurati-Engelmann Disease",
      "disease_term_id": "MONDO:0007542",
      "source_file": "Camurati-Engelmann_Disease.yaml",
      "term_id": "UBERON:0004769",
      "term_label": "diaphysis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0004769",
      "best_source_term_label": "diaphysis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004769"
      ],
      "supporting_source_term_labels": [
        "diaphysis"
      ],
      "supporting_source_node_names": [
        "Impaired Bone Remodeling Balance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004769" } }));
