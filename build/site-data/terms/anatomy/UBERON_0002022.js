window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002022"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002022",
  "term_label": "insula",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0002022",
      "term_label": "insula",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002022",
      "best_source_term_label": "insula",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002022"
      ],
      "supporting_source_term_labels": [
        "insula"
      ],
      "supporting_source_node_names": [
        "Central Cortical Processing"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002022" } }));
