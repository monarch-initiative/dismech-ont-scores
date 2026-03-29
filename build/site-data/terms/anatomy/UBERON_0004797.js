window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004797"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004797",
  "term_label": "blood vessel layer",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.346635,
  "mean_score": 0.346635,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0004797",
      "term_label": "blood vessel layer",
      "score": 0.346635,
      "direct_score": 0.0,
      "propagated_score": 0.346635,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003618",
      "best_source_term_label": "aorta tunica media",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003618",
        "UBERON:0003619"
      ],
      "supporting_source_term_labels": [
        "aorta tunica intima",
        "aorta tunica media"
      ],
      "supporting_source_node_names": [
        "Extracellular Matrix Remodeling",
        "Vascular Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004797" } }));
