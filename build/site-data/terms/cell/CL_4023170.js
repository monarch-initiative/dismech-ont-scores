window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4023170"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4023170",
  "term_label": "trigeminal sensory neuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:4023170",
      "term_label": "trigeminal sensory neuron",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:4023170",
      "best_source_term_label": "trigeminal sensory neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:4023170"
      ],
      "supporting_source_term_labels": [
        "trigeminal sensory neuron"
      ],
      "supporting_source_node_names": [
        "Trigeminal neurosensory dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4023170" } }));
