window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001994"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001994",
  "term_label": "hyaline cartilage tissue",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.07,
  "mean_score": 0.07,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0001994",
      "term_label": "hyaline cartilage tissue",
      "score": 0.07,
      "direct_score": 0.0,
      "propagated_score": 0.07,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010996",
      "best_source_term_label": "articular cartilage of joint",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0010996"
      ],
      "supporting_source_term_labels": [
        "articular cartilage of joint"
      ],
      "supporting_source_node_names": [
        "Cartilage and Bone Destruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001994" } }));
