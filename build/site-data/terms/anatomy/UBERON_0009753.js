window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0009753"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0009753",
  "term_label": "adrenal gland cortex zone",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.761765,
  "mean_score": 0.761765,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "UBERON:0009753",
      "term_label": "adrenal gland cortex zone",
      "score": 0.761765,
      "direct_score": 0.0,
      "propagated_score": 0.761765,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002053",
      "best_source_term_label": "zona glomerulosa of adrenal gland",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002053",
        "UBERON:0002054"
      ],
      "supporting_source_term_labels": [
        "zona fasciculata of adrenal gland",
        "zona glomerulosa of adrenal gland"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis",
        "Reduced Aldosterone Production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0009753" } }));
