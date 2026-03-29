window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002186"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002186",
  "term_label": "bronchiole",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Cough Variant Asthma",
      "disease_term_id": "MONDO:0001491",
      "source_file": "Cough_Variant_Asthma.yaml",
      "term_id": "UBERON:0002186",
      "term_label": "bronchiole",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002186",
      "best_source_term_label": "bronchiole",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002186"
      ],
      "supporting_source_term_labels": [
        "bronchiole"
      ],
      "supporting_source_node_names": [
        "Small Airway Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002186" } }));
