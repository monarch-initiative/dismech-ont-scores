window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0013776"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0013776",
  "term_label": "skin of palmar/plantar part of autopod",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0013776",
      "term_label": "skin of palmar/plantar part of autopod",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0013776",
      "best_source_term_label": "skin of palmar/plantar part of autopod",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0013776"
      ],
      "supporting_source_term_labels": [
        "skin of palmar/plantar part of autopod"
      ],
      "supporting_source_node_names": [
        "Gap Junction Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0013776" } }));
