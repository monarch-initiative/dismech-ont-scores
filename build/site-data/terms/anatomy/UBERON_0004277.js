window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004277"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004277",
  "term_label": "eye muscle",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.116667,
  "mean_score": 0.116667,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "UBERON:0004277",
      "term_label": "eye muscle",
      "score": 0.116667,
      "direct_score": 0.0,
      "propagated_score": 0.116667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001601",
      "best_source_term_label": "extra-ocular muscle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001601"
      ],
      "supporting_source_term_labels": [
        "extra-ocular muscle"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004277" } }));
