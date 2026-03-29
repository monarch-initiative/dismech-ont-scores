window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001839"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001839",
  "term_label": "bony labyrinth",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.329987,
  "mean_score": 0.28574,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0001839",
      "term_label": "bony labyrinth",
      "score": 0.329987,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0001839",
      "term_label": "bony labyrinth",
      "score": 0.320991,
      "direct_score": 0.0,
      "propagated_score": 0.389095,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001864",
      "best_source_term_label": "scala tympani",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001844",
        "UBERON:0001864"
      ],
      "supporting_source_term_labels": [
        "cochlea",
        "scala tympani"
      ],
      "supporting_source_node_names": [
        "Fibroblast proliferation in the labyrinth",
        "Labyrinthine fibrosis",
        "Labyrinthitis ossificans",
        "Leukocyte recruitment and infiltration",
        "Spiral ganglion neuron degeneration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0001839",
      "term_label": "bony labyrinth",
      "score": 0.206242,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001839" } }));
