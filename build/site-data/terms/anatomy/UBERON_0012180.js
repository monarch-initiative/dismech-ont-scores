window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0012180"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0012180",
  "term_label": "head or neck skin",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.043556,
  "mean_score": 0.043556,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Transient Neonatal Pustular Melanosis",
      "disease_term_id": "",
      "source_file": "Transient_Neonatal_Pustular_Melanosis.yaml",
      "term_id": "UBERON:0012180",
      "term_label": "head or neck skin",
      "score": 0.043556,
      "direct_score": 0.0,
      "propagated_score": 0.043556,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:1000021",
      "best_source_term_label": "skin of face",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0012180" } }));
