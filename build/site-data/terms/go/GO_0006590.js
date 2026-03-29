window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006590"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006590",
  "term_label": "thyroid hormone generation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.875,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hashimoto's Thyroiditis",
      "disease_term_id": "MONDO:0007699",
      "source_file": "Hashimotos_Thyroiditis.yaml",
      "term_id": "GO:0006590",
      "term_label": "thyroid hormone generation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006590",
      "best_source_term_label": "thyroid hormone generation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006590"
      ],
      "supporting_source_term_labels": [
        "thyroid hormone generation"
      ],
      "supporting_source_node_names": [
        "Thyroid Hormone Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:0006590",
      "term_label": "thyroid hormone generation",
      "score": 0.75,
      "direct_score": 0.75,
      "propagated_score": 0.75,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006590",
      "best_source_term_label": "thyroid hormone generation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006590"
      ],
      "supporting_source_term_labels": [
        "thyroid hormone generation"
      ],
      "supporting_source_node_names": [
        "Thyroid Overactivity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006590" } }));
