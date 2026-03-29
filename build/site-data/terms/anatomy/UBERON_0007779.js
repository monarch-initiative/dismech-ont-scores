window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0007779"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0007779",
  "term_label": "transudate",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.509091,
  "mean_score": 0.509091,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "UBERON:0007779",
      "term_label": "transudate",
      "score": 0.509091,
      "direct_score": 0.0,
      "propagated_score": 0.509091,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001359",
      "best_source_term_label": "cerebrospinal fluid",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001359"
      ],
      "supporting_source_term_labels": [
        "cerebrospinal fluid"
      ],
      "supporting_source_node_names": [
        "Bacterial Invasion",
        "Increased Intracranial Pressure",
        "Inflammasome Activation and Pyroptosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0007779" } }));
