window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001151"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001151",
  "term_label": "tail of pancreas",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pancreatic Mucinous Cystadenoma",
      "disease_term_id": "MONDO:0018523",
      "source_file": "Pancreatic_Mucinous_Cystadenoma.yaml",
      "term_id": "UBERON:0001151",
      "term_label": "tail of pancreas",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001151",
      "best_source_term_label": "tail of pancreas",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001151"
      ],
      "supporting_source_term_labels": [
        "tail of pancreas"
      ],
      "supporting_source_node_names": [
        "Mucinous Epithelial Proliferation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001151" } }));
