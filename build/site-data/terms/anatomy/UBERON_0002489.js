window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002489"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002489",
  "term_label": "coronal suture",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Apert Syndrome",
      "disease_term_id": "MONDO:0007041",
      "source_file": "Apert_Syndrome.yaml",
      "term_id": "UBERON:0002489",
      "term_label": "coronal suture",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002489",
      "best_source_term_label": "coronal suture",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002489"
      ],
      "supporting_source_term_labels": [
        "coronal suture"
      ],
      "supporting_source_node_names": [
        "Enhanced osteoblast differentiation and matrix mineralization in cranial suture mesenchyme",
        "Premature coronal suture fusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002489" } }));
