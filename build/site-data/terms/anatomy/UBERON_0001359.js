window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001359"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001359",
  "term_label": "cerebrospinal fluid",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.727273,
  "mean_score": 0.727273,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "UBERON:0001359",
      "term_label": "cerebrospinal fluid",
      "score": 0.727273,
      "direct_score": 0.727273,
      "propagated_score": 0.727273,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001359",
      "best_source_term_label": "cerebrospinal fluid",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001359" } }));
