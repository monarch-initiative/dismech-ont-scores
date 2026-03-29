window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002387"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002387",
  "term_label": "pes",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ainhum",
      "disease_term_id": "MONDO:0007074",
      "source_file": "Ainhum.yaml",
      "term_id": "UBERON:0002387",
      "term_label": "pes",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003635",
      "best_source_term_label": "pedal digit 5",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003635"
      ],
      "supporting_source_term_labels": [
        "pedal digit 5"
      ],
      "supporting_source_node_names": [
        "Constricting groove forms around proximal toe"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002387" } }));
