window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001033"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001033",
  "term_label": "peritubular capillary endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.176471,
  "mean_score": 0.176471,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "CL:1001033",
      "term_label": "peritubular capillary endothelial cell",
      "score": 0.176471,
      "direct_score": 0.176471,
      "propagated_score": 0.176471,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:1001033",
      "best_source_term_label": "peritubular capillary endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1001033"
      ],
      "supporting_source_term_labels": [
        "peritubular capillary endothelial cell"
      ],
      "supporting_source_node_names": [
        "Ischemic Tubular Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001033" } }));
