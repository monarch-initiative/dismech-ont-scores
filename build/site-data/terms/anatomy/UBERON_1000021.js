window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:1000021"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:1000021",
  "term_label": "skin of face",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.088889,
  "mean_score": 0.088889,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Transient Neonatal Pustular Melanosis",
      "disease_term_id": "",
      "source_file": "Transient_Neonatal_Pustular_Melanosis.yaml",
      "term_id": "UBERON:1000021",
      "term_label": "skin of face",
      "score": 0.088889,
      "direct_score": 0.088889,
      "propagated_score": 0.088889,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:1000021",
      "best_source_term_label": "skin of face",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:1000021"
      ],
      "supporting_source_term_labels": [
        "skin of face"
      ],
      "supporting_source_node_names": [
        "Hyper pigmentation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:1000021" } }));
