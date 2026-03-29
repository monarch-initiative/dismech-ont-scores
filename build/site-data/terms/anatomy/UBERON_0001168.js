window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001168"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001168",
  "term_label": "wall of small intestine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.178571,
  "mean_score": 0.178571,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001168",
      "term_label": "wall of small intestine",
      "score": 0.178571,
      "direct_score": 0.0,
      "propagated_score": 0.178571,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001238",
      "best_source_term_label": "lamina propria of small intestine",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001238"
      ],
      "supporting_source_term_labels": [
        "lamina propria of small intestine"
      ],
      "supporting_source_node_names": [
        "Macrophage Autophagy Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001168" } }));
