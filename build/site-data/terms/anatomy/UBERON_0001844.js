window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001844"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001844",
  "term_label": "cochlea",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 0.8,
  "mean_score": 0.621828,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0001844",
      "term_label": "cochlea",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001844"
      ],
      "supporting_source_term_labels": [
        "cochlea"
      ],
      "supporting_source_node_names": [
        "Cochlear Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0001844",
      "term_label": "cochlea",
      "score": 0.565483,
      "direct_score": 0.37092,
      "propagated_score": 0.68546,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001864",
      "best_source_term_label": "scala tympani",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001844",
        "UBERON:0001864"
      ],
      "supporting_source_term_labels": [
        "cochlea",
        "scala tympani"
      ],
      "supporting_source_node_names": [
        "Spiral ganglion neuron degeneration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0001844",
      "term_label": "cochlea",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001844"
      ],
      "supporting_source_term_labels": [
        "cochlea"
      ],
      "supporting_source_node_names": [
        "Central nervous system inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001844" } }));
