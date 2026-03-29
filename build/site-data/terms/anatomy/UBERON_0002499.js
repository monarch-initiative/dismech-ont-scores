window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002499"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002499",
  "term_label": "cochlear labyrinth",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.197894,
  "mean_score": 0.197894,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0002499",
      "term_label": "cochlear labyrinth",
      "score": 0.197894,
      "direct_score": 0.0,
      "propagated_score": 0.197894,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002227",
      "best_source_term_label": "spiral organ of cochlea",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0002227",
        "UBERON:0002282"
      ],
      "supporting_source_term_labels": [
        "spiral organ of cochlea",
        "stria vascularis of cochlear duct"
      ],
      "supporting_source_node_names": [
        "Blood-labyrinth barrier disruption",
        "Cochlear hair cell injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002499" } }));
