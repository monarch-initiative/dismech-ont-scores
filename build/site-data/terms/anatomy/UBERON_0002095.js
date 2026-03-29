window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002095"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002095",
  "term_label": "mesentery",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.089286,
  "mean_score": 0.089286,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0002095",
      "term_label": "mesentery",
      "score": 0.089286,
      "direct_score": 0.0,
      "propagated_score": 0.089286,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0015143",
      "best_source_term_label": "mesenteric fat pad",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0015143"
      ],
      "supporting_source_term_labels": [
        "mesenteric fat pad"
      ],
      "supporting_source_node_names": [
        "Fibrosis and Stricture Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002095" } }));
