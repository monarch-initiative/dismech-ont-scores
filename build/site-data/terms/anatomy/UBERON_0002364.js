window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002364"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002364",
  "term_label": "tympanic membrane",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.0566,
  "mean_score": 0.0566,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Cholesteatoma",
      "disease_term_id": "MONDO:0006530",
      "source_file": "Cholesteatoma.yaml",
      "term_id": "UBERON:0002364",
      "term_label": "tympanic membrane",
      "score": 0.0566,
      "direct_score": 0.0566,
      "propagated_score": 0.0566,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002364",
      "best_source_term_label": "tympanic membrane",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002364"
      ],
      "supporting_source_term_labels": [
        "tympanic membrane"
      ],
      "supporting_source_node_names": [
        "Keratinizing squamous epithelium overgrowth in the middle ear"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002364" } }));
