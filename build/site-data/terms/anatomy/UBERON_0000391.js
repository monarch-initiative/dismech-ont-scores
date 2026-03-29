window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000391"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000391",
  "term_label": "leptomeninx",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Melanoma_in_Congenital_Melanocytic_Nevus",
      "disease_term_id": "MONDO:0850110",
      "source_file": "Melanoma_in_Congenital_Melanocytic_Nevus.yaml",
      "term_id": "UBERON:0000391",
      "term_label": "leptomeninx",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0000391",
      "term_label": "leptomeninx",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000391",
      "best_source_term_label": "leptomeninx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000391" } }));
