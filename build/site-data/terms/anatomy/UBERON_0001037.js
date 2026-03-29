window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001037"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001037",
  "term_label": "strand of hair",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.288,
  "mean_score": 0.288,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "UBERON:0001037",
      "term_label": "strand of hair",
      "score": 0.288,
      "direct_score": 0.0,
      "propagated_score": 0.288,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002074",
      "best_source_term_label": "hair shaft",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002074"
      ],
      "supporting_source_term_labels": [
        "hair shaft"
      ],
      "supporting_source_node_names": [
        "Hair follicle toxicity",
        "Keratin affinity and appendage accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001037" } }));
