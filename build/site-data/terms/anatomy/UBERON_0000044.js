window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000044"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000044",
  "term_label": "dorsal root ganglion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "UBERON:0000044",
      "term_label": "dorsal root ganglion",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000044",
      "best_source_term_label": "dorsal root ganglion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000044"
      ],
      "supporting_source_term_labels": [
        "dorsal root ganglion"
      ],
      "supporting_source_node_names": [
        "Establishment of latency in sensory ganglia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000044" } }));
