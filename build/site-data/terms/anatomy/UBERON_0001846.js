window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001846"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001846",
  "term_label": "internal ear",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.648302,
  "mean_score": 0.337868,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0001846",
      "term_label": "internal ear",
      "score": 0.648302,
      "direct_score": 0.579562,
      "propagated_score": 0.83208,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001846",
      "best_source_term_label": "internal ear",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001844",
        "UBERON:0001846",
        "UBERON:0001849",
        "UBERON:0001862",
        "UBERON:0001864",
        "UBERON:0002227",
        "UBERON:0002282"
      ],
      "supporting_source_term_labels": [
        "cochlea",
        "internal ear",
        "membranous labyrinth",
        "scala tympani",
        "spiral organ of cochlea",
        "stria vascularis of cochlear duct",
        "vestibular labyrinth"
      ],
      "supporting_source_node_names": [
        "Autoimmune-mediated inner ear damage"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "UBERON:0001846",
      "term_label": "internal ear",
      "score": 0.44995,
      "direct_score": 0.0,
      "propagated_score": 0.5775,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005411",
      "best_source_term_label": "bony otic capsule",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001841",
        "UBERON:0005411"
      ],
      "supporting_source_term_labels": [
        "anterior semicircular canal",
        "bony otic capsule"
      ],
      "supporting_source_node_names": [
        "Bony Dehiscence of Semicircular Canal"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0001846",
      "term_label": "internal ear",
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
      "term_id": "UBERON:0001846",
      "term_label": "internal ear",
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001846" } }));
