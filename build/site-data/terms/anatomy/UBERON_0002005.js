window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002005"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002005",
  "term_label": "enteric nervous system",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5875,
  "mean_score": 0.5875,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "UBERON:0002005",
      "term_label": "enteric nervous system",
      "score": 0.5875,
      "direct_score": 0.5,
      "propagated_score": 0.5875,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002005",
      "best_source_term_label": "enteric nervous system",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002005",
        "UBERON:0002439"
      ],
      "supporting_source_term_labels": [
        "enteric nervous system",
        "myenteric nerve plexus"
      ],
      "supporting_source_node_names": [
        "Disrupted Enteric Nervous System Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002005" } }));
