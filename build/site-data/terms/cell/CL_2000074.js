window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000074"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000074",
  "term_label": "splenocyte",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.196,
  "mean_score": 0.196,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Congestive Splenomegaly",
      "disease_term_id": "MONDO:0037251",
      "source_file": "Congestive_Splenomegaly.yaml",
      "term_id": "CL:2000074",
      "term_label": "splenocyte",
      "score": 0.196,
      "direct_score": 0.0,
      "propagated_score": 0.196,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000874",
      "best_source_term_label": "splenic red pulp macrophage",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000874"
      ],
      "supporting_source_term_labels": [
        "splenic red pulp macrophage"
      ],
      "supporting_source_node_names": [
        "Red Pulp Congestion and Fibrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000074" } }));
