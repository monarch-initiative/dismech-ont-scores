window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002027"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002027",
  "term_label": "stratum corneum of epidermis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.521361,
  "mean_score": 0.521361,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Netherton syndrome",
      "disease_term_id": "MONDO:0009735",
      "source_file": "Netherton_Syndrome.yaml",
      "term_id": "UBERON:0002027",
      "term_label": "stratum corneum of epidermis",
      "score": 0.521361,
      "direct_score": 0.521361,
      "propagated_score": 0.521361,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002027",
      "best_source_term_label": "stratum corneum of epidermis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002027"
      ],
      "supporting_source_term_labels": [
        "stratum corneum of epidermis"
      ],
      "supporting_source_node_names": [
        "Corneodesmosome degradation and accelerated desquamation",
        "Unchecked epidermal kallikrein protease activity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002027" } }));
