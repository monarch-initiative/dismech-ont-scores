window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000094"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000094",
  "term_label": "membrane organ",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.26662,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Multiple Sclerosis",
      "disease_term_id": "MONDO:0005301",
      "source_file": "Multiple_Sclerosis.yaml",
      "term_id": "UBERON:0000094",
      "term_label": "membrane organ",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002360",
      "best_source_term_label": "meninx",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002360"
      ],
      "supporting_source_term_labels": [
        "meninx"
      ],
      "supporting_source_node_names": [
        "Demyelination"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Melanoma_in_Congenital_Melanocytic_Nevus",
      "disease_term_id": "MONDO:0850110",
      "source_file": "Melanoma_in_Congenital_Melanocytic_Nevus.yaml",
      "term_id": "UBERON:0000094",
      "term_label": "membrane organ",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000391"
      ],
      "supporting_source_term_labels": [
        "leptomeninx"
      ],
      "supporting_source_node_names": [
        "Genetic Mutations"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "UBERON:0000094",
      "term_label": "membrane organ",
      "score": 0.236595,
      "direct_score": 0.0,
      "propagated_score": 0.318182,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002360",
      "best_source_term_label": "meninx",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002360"
      ],
      "supporting_source_term_labels": [
        "meninx"
      ],
      "supporting_source_node_names": [
        "Bacterial Invasion",
        "TLR-Mediated Innate Immune Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0000094",
      "term_label": "membrane organ",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000391"
      ],
      "supporting_source_term_labels": [
        "leptomeninx"
      ],
      "supporting_source_node_names": [
        "Central nervous system inflammation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Cholesteatoma",
      "disease_term_id": "MONDO:0006530",
      "source_file": "Cholesteatoma.yaml",
      "term_id": "UBERON:0000094",
      "term_label": "membrane organ",
      "score": 0.029461,
      "direct_score": 0.0,
      "propagated_score": 0.03962,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002364",
      "best_source_term_label": "tympanic membrane",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002364"
      ],
      "supporting_source_term_labels": [
        "tympanic membrane"
      ],
      "supporting_source_node_names": [
        "Keratinizing squamous epithelium overgrowth in the middle ear"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000094" } }));
