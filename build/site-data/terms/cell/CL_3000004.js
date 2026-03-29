window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:3000004"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:3000004",
  "term_label": "peripheral sensory neuron",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "CL:3000004",
      "term_label": "peripheral sensory neuron",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:1001451",
      "best_source_term_label": "sensory neuron of dorsal root ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1001451"
      ],
      "supporting_source_term_labels": [
        "sensory neuron of dorsal root ganglion"
      ],
      "supporting_source_node_names": [
        "Establishment of latency in sensory ganglia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:3000004" } }));
