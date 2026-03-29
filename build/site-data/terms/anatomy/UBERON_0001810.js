window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001810"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001810",
  "term_label": "nerve plexus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1715,
  "mean_score": 0.1715,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "UBERON:0001810",
      "term_label": "nerve plexus",
      "score": 0.1715,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002439",
      "best_source_term_label": "myenteric nerve plexus",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002439"
      ],
      "supporting_source_term_labels": [
        "myenteric nerve plexus"
      ],
      "supporting_source_node_names": [
        "Failure of Enteric Ganglion Cell Migration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001810" } }));
