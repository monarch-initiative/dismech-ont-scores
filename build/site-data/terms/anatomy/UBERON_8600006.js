window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:8600006"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:8600006",
  "term_label": "visceral striated muscle tissue",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343,
  "mean_score": 0.343,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "UBERON:8600006",
      "term_label": "visceral striated muscle tissue",
      "score": 0.343,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002350",
      "best_source_term_label": "conducting system of heart",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002350"
      ],
      "supporting_source_term_labels": [
        "conducting system of heart"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:8600006" } }));
