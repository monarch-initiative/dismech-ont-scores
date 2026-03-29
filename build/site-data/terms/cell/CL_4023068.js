window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4023068"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4023068",
  "term_label": "thalamic excitatory neuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.206186,
  "mean_score": 0.206186,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "CL:4023068",
      "term_label": "thalamic excitatory neuron",
      "score": 0.206186,
      "direct_score": 0.206186,
      "propagated_score": 0.206186,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:4023068",
      "best_source_term_label": "thalamic excitatory neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:4023068"
      ],
      "supporting_source_term_labels": [
        "thalamic excitatory neuron"
      ],
      "supporting_source_node_names": [
        "Thalamocortical Circuit Disruption in DEE"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4023068" } }));
