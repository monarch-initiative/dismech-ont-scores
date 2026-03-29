window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000053"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000053",
  "term_label": "splenic endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Congestive Splenomegaly",
      "disease_term_id": "MONDO:0037251",
      "source_file": "Congestive_Splenomegaly.yaml",
      "term_id": "CL:2000053",
      "term_label": "splenic endothelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:2000053",
      "best_source_term_label": "splenic endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:2000053"
      ],
      "supporting_source_term_labels": [
        "splenic endothelial cell"
      ],
      "supporting_source_node_names": [
        "Portal and Splenic Venous Congestion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000053" } }));
