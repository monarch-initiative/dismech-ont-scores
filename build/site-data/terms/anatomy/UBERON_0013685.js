window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0013685"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0013685",
  "term_label": "foramen of skull",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.760854,
  "mean_score": 0.760854,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0013685",
      "term_label": "foramen of skull",
      "score": 0.760854,
      "direct_score": 0.0,
      "propagated_score": 0.760854,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001864",
      "best_source_term_label": "scala tympani",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001864",
        "UBERON:0002502"
      ],
      "supporting_source_term_labels": [
        "round window of inner ear",
        "scala tympani"
      ],
      "supporting_source_node_names": [
        "Fibroblast proliferation in the labyrinth",
        "Labyrinthine fibrosis",
        "Labyrinthitis ossificans",
        "Leukocyte recruitment and infiltration",
        "Pathogen entry into the inner ear"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0013685" } }));
