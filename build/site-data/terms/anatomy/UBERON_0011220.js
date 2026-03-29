window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011220"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011220",
  "term_label": "mastoid process of temporal bone",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.036224,
  "mean_score": 0.036224,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Cholesteatoma",
      "disease_term_id": "MONDO:0006530",
      "source_file": "Cholesteatoma.yaml",
      "term_id": "UBERON:0011220",
      "term_label": "mastoid process of temporal bone",
      "score": 0.036224,
      "direct_score": 0.036224,
      "propagated_score": 0.036224,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0011220",
      "best_source_term_label": "mastoid process of temporal bone",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0011220"
      ],
      "supporting_source_term_labels": [
        "mastoid process of temporal bone"
      ],
      "supporting_source_node_names": [
        "Local temporal bone erosion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011220" } }));
