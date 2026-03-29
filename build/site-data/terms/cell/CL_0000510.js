window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000510"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000510",
  "term_label": "paneth cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.471698,
  "mean_score": 0.471698,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "CL:0000510",
      "term_label": "paneth cell",
      "score": 0.471698,
      "direct_score": 0.471698,
      "propagated_score": 0.471698,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000510",
      "best_source_term_label": "paneth cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000510" } }));
