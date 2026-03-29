window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001694"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001694",
  "term_label": "petrous part of temporal bone",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.389567,
  "mean_score": 0.223254,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "UBERON:0001694",
      "term_label": "petrous part of temporal bone",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005411",
      "best_source_term_label": "bony otic capsule",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005411"
      ],
      "supporting_source_term_labels": [
        "bony otic capsule"
      ],
      "supporting_source_node_names": [
        "Bony Dehiscence of Semicircular Canal"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0001694",
      "term_label": "petrous part of temporal bone",
      "score": 0.250228,
      "direct_score": 0.0,
      "propagated_score": 0.321162,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002502",
      "best_source_term_label": "round window of inner ear",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001844",
        "UBERON:0001864",
        "UBERON:0002502"
      ],
      "supporting_source_term_labels": [
        "cochlea",
        "round window of inner ear",
        "scala tympani"
      ],
      "supporting_source_node_names": [
        "Fibroblast proliferation in the labyrinth",
        "Labyrinthine fibrosis",
        "Labyrinthitis ossificans",
        "Leukocyte recruitment and infiltration",
        "Pathogen entry into the inner ear",
        "Spiral ganglion neuron degeneration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0001694",
      "term_label": "petrous part of temporal bone",
      "score": 0.155827,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0001694",
      "term_label": "petrous part of temporal bone",
      "score": 0.097392,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001844",
      "best_source_term_label": "cochlea",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001694" } }));
