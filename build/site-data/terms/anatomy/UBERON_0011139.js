window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011139"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011139",
  "term_label": "synovial limb joint",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.392,
  "mean_score": 0.392,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "UBERON:0011139",
      "term_label": "synovial limb joint",
      "score": 0.392,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007722",
      "best_source_term_label": "interphalangeal joint of manus",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007722"
      ],
      "supporting_source_term_labels": [
        "interphalangeal joint of manus"
      ],
      "supporting_source_node_names": [
        "Joint Contracture"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011139" } }));
