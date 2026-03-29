window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000446"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000446",
  "term_label": "chief cell of parathyroid gland",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.184544,
  "mean_score": 0.184544,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "CL:0000446",
      "term_label": "chief cell of parathyroid gland",
      "score": 0.184544,
      "direct_score": 0.184544,
      "propagated_score": 0.184544,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000446",
      "best_source_term_label": "chief cell of parathyroid gland",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000446" } }));
