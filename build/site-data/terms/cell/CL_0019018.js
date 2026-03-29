window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0019018"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0019018",
  "term_label": "blood vessel smooth muscle cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "CL:0019018",
      "term_label": "blood vessel smooth muscle cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0019018",
      "best_source_term_label": "blood vessel smooth muscle cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0019018"
      ],
      "supporting_source_term_labels": [
        "blood vessel smooth muscle cell"
      ],
      "supporting_source_node_names": [
        "Pulmonary hypertension pathogenesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0019018" } }));
