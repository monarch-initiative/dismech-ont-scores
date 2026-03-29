window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001639"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001639",
  "term_label": "hepatic portal vein",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.166667,
  "mean_score": 0.166667,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0001639",
      "term_label": "hepatic portal vein",
      "score": 0.166667,
      "direct_score": 0.166667,
      "propagated_score": 0.166667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001639",
      "best_source_term_label": "hepatic portal vein",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001639"
      ],
      "supporting_source_term_labels": [
        "hepatic portal vein"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001639" } }));
