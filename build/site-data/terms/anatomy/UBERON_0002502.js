window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002502"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002502",
  "term_label": "round window of inner ear",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.289781,
  "mean_score": 0.289781,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0002502",
      "term_label": "round window of inner ear",
      "score": 0.289781,
      "direct_score": 0.289781,
      "propagated_score": 0.289781,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002502",
      "best_source_term_label": "round window of inner ear",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002502"
      ],
      "supporting_source_term_labels": [
        "round window of inner ear"
      ],
      "supporting_source_node_names": [
        "Pathogen entry into the inner ear"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002502" } }));
