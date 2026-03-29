window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011134"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011134",
  "term_label": "nonsynovial joint",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.500746,
  "mean_score": 0.500746,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Apert Syndrome",
      "disease_term_id": "MONDO:0007041",
      "source_file": "Apert_Syndrome.yaml",
      "term_id": "UBERON:0011134",
      "term_label": "nonsynovial joint",
      "score": 0.500746,
      "direct_score": 0.0,
      "propagated_score": 0.500746,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003685",
      "best_source_term_label": "cranial suture",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002489",
        "UBERON:0003685"
      ],
      "supporting_source_term_labels": [
        "coronal suture",
        "cranial suture"
      ],
      "supporting_source_node_names": [
        "Enhanced osteoblast differentiation and matrix mineralization in cranial suture mesenchyme",
        "Premature coronal suture fusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011134" } }));
