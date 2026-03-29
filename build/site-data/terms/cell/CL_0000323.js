window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000323"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000323",
  "term_label": "lysozyme secreting cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.330189,
  "mean_score": 0.330189,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "CL:0000323",
      "term_label": "lysozyme secreting cell",
      "score": 0.330189,
      "direct_score": 0.0,
      "propagated_score": 0.330189,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000510",
      "best_source_term_label": "paneth cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000510"
      ],
      "supporting_source_term_labels": [
        "paneth cell"
      ],
      "supporting_source_node_names": [
        "Paneth Cell Autophagy Impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000323" } }));
