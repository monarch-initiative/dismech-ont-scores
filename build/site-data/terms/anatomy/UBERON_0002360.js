window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002360"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002360",
  "term_label": "meninx",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.568159,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Multiple Sclerosis",
      "disease_term_id": "MONDO:0005301",
      "source_file": "Multiple_Sclerosis.yaml",
      "term_id": "UBERON:0002360",
      "term_label": "meninx",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002360",
      "best_source_term_label": "meninx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "UBERON:0002360",
      "term_label": "meninx",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "UBERON:0002360",
      "term_label": "meninx",
      "score": 0.454545,
      "direct_score": 0.454545,
      "propagated_score": 0.454545,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002360",
      "best_source_term_label": "meninx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "UBERON:0002360",
      "term_label": "meninx",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002360" } }));
