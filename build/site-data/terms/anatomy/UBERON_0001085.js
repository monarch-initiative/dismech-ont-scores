window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001085"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001085",
  "term_label": "skin of trunk",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1764,
  "mean_score": 0.1764,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001085",
      "term_label": "skin of trunk",
      "score": 0.1764,
      "direct_score": 0.0,
      "propagated_score": 0.1764,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0012336",
      "best_source_term_label": "perianal skin",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0012336"
      ],
      "supporting_source_term_labels": [
        "perianal skin"
      ],
      "supporting_source_node_names": [
        "Myeloid Cell Recruitment to Perianal Tissue",
        "Myeloid-Stromal Cell Crosstalk"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001085" } }));
