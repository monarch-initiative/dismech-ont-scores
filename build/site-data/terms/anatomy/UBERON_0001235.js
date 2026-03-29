window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001235"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001235",
  "term_label": "adrenal cortex",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.698962,
  "mean_score": 0.698962,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "UBERON:0001235",
      "term_label": "adrenal cortex",
      "score": 0.698962,
      "direct_score": 0.294118,
      "propagated_score": 0.698962,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002053",
      "best_source_term_label": "zona glomerulosa of adrenal gland",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001235",
        "UBERON:0002053",
        "UBERON:0002054"
      ],
      "supporting_source_term_labels": [
        "adrenal cortex",
        "zona fasciculata of adrenal gland",
        "zona glomerulosa of adrenal gland"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001235" } }));
