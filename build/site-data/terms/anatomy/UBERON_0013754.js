window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0013754"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0013754",
  "term_label": "integumentary system layer",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.301075,
  "mean_score": 0.24152,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Netherton syndrome",
      "disease_term_id": "MONDO:0009735",
      "source_file": "Netherton_Syndrome.yaml",
      "term_id": "UBERON:0013754",
      "term_label": "integumentary system layer",
      "score": 0.301075,
      "direct_score": 0.0,
      "propagated_score": 0.364953,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002027",
      "best_source_term_label": "stratum corneum of epidermis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ehlers-Danlos Syndrome",
      "disease_term_id": "MONDO:0020066",
      "source_file": "Ehlers-Danlos_Syndrome.yaml",
      "term_id": "UBERON:0013754",
      "term_label": "integumentary system layer",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002067",
      "best_source_term_label": "dermis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002067"
      ],
      "supporting_source_term_labels": [
        "dermis"
      ],
      "supporting_source_node_names": [
        "Connective Tissue Fragility"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "UBERON:0013754",
      "term_label": "integumentary system layer",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002072",
      "best_source_term_label": "hypodermis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002072"
      ],
      "supporting_source_term_labels": [
        "hypodermis"
      ],
      "supporting_source_node_names": [
        "Colonization reservoir and follicular inoculation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0013754" } }));
