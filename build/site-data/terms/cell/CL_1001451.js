window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001451"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001451",
  "term_label": "sensory neuron of dorsal root ganglion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "CL:1001451",
      "term_label": "sensory neuron of dorsal root ganglion",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:1001451",
      "best_source_term_label": "sensory neuron of dorsal root ganglion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001451" } }));
