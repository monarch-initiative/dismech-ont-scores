window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000977"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000977",
  "term_label": "pleura",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "UBERON:0000977",
      "term_label": "pleura",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000977",
      "best_source_term_label": "pleura",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000977"
      ],
      "supporting_source_term_labels": [
        "pleura"
      ],
      "supporting_source_node_names": [
        "Autoinflammatory Pathway Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Malignant Mesothelioma",
      "disease_term_id": "MONDO:0006292",
      "source_file": "Malignant_Mesothelioma.yaml",
      "term_id": "UBERON:0000977",
      "term_label": "pleura",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000977",
      "best_source_term_label": "pleura",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000977"
      ],
      "supporting_source_term_labels": [
        "pleura"
      ],
      "supporting_source_node_names": [
        "Asbestos-Induced Mesothelial Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000977" } }));
