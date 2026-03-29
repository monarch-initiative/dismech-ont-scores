window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002054"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002054",
  "term_label": "zona fasciculata of adrenal gland",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.294118,
  "mean_score": 0.294118,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "UBERON:0002054",
      "term_label": "zona fasciculata of adrenal gland",
      "score": 0.294118,
      "direct_score": 0.294118,
      "propagated_score": 0.294118,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002054",
      "best_source_term_label": "zona fasciculata of adrenal gland",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002054"
      ],
      "supporting_source_term_labels": [
        "zona fasciculata of adrenal gland"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002054" } }));
