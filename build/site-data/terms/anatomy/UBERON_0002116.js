window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002116"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002116",
  "term_label": "ileum",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0002116",
      "term_label": "ileum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002116",
      "best_source_term_label": "ileum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002116"
      ],
      "supporting_source_term_labels": [
        "ileum"
      ],
      "supporting_source_node_names": [
        "Antimicrobial Defense Deficiency",
        "IL-23/Th17 Axis Dysregulation",
        "Paneth Cell Autophagy Impairment"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pouchitis",
      "disease_term_id": "MONDO:0005312",
      "source_file": "Pouchitis.yaml",
      "term_id": "UBERON:0002116",
      "term_label": "ileum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002116",
      "best_source_term_label": "ileum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002116"
      ],
      "supporting_source_term_labels": [
        "ileum"
      ],
      "supporting_source_node_names": [
        "Bacterial Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002116" } }));
