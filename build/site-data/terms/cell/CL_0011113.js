window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0011113"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0011113",
  "term_label": "spiral ganglion neuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.571429,
  "mean_score": 0.571429,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "CL:0011113",
      "term_label": "spiral ganglion neuron",
      "score": 0.571429,
      "direct_score": 0.571429,
      "propagated_score": 0.571429,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0011113",
      "best_source_term_label": "spiral ganglion neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011113"
      ],
      "supporting_source_term_labels": [
        "spiral ganglion neuron"
      ],
      "supporting_source_node_names": [
        "Spiral ganglion neuron degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0011113" } }));
