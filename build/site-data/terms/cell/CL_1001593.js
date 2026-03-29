window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001593"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001593",
  "term_label": "parathyroid glandular cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.129181,
  "mean_score": 0.129181,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "CL:1001593",
      "term_label": "parathyroid glandular cell",
      "score": 0.129181,
      "direct_score": 0.0,
      "propagated_score": 0.129181,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000446",
      "best_source_term_label": "chief cell of parathyroid gland",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000446"
      ],
      "supporting_source_term_labels": [
        "chief cell of parathyroid gland"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001593" } }));
