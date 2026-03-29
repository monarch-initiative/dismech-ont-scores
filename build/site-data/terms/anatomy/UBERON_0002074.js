window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002074"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002074",
  "term_label": "hair shaft",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.576,
  "mean_score": 0.576,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "UBERON:0002074",
      "term_label": "hair shaft",
      "score": 0.576,
      "direct_score": 0.576,
      "propagated_score": 0.576,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002074",
      "best_source_term_label": "hair shaft",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002074" } }));
