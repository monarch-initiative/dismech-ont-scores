window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035898"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035898",
  "term_label": "parathyroid hormone secretion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.237037,
  "mean_score": 0.237037,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "GO:0035898",
      "term_label": "parathyroid hormone secretion",
      "score": 0.237037,
      "direct_score": 0.237037,
      "propagated_score": 0.237037,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0035898",
      "best_source_term_label": "parathyroid hormone secretion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035898"
      ],
      "supporting_source_term_labels": [
        "parathyroid hormone secretion"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035898" } }));
