window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0009127"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0009127",
  "term_label": "epibranchial ganglion",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.119048,
  "mean_score": 0.119048,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "UBERON:0009127",
      "term_label": "epibranchial ganglion",
      "score": 0.119048,
      "direct_score": 0.0,
      "propagated_score": 0.119048,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001700",
      "best_source_term_label": "geniculate ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001700"
      ],
      "supporting_source_term_labels": [
        "geniculate ganglion"
      ],
      "supporting_source_node_names": [
        "Putative post-viral immune activation in the geniculate ganglion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0009127" } }));
