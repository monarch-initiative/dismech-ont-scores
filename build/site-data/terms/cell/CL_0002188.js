window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002188"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002188",
  "term_label": "glomerular endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.117647,
  "mean_score": 0.117647,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "CL:0002188",
      "term_label": "glomerular endothelial cell",
      "score": 0.117647,
      "direct_score": 0.117647,
      "propagated_score": 0.117647,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002188",
      "best_source_term_label": "glomerular endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002188"
      ],
      "supporting_source_term_labels": [
        "glomerular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Sepsis-Associated AKI"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002188" } }));
