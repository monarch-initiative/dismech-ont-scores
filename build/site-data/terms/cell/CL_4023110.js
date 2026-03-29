window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4023110"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4023110",
  "term_label": "amygdala pyramidal neuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Generalized Anxiety Disorder",
      "disease_term_id": "MONDO:0001942",
      "source_file": "Generalized_Anxiety_Disorder.yaml",
      "term_id": "CL:4023110",
      "term_label": "amygdala pyramidal neuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:4023110",
      "best_source_term_label": "amygdala pyramidal neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:4023110"
      ],
      "supporting_source_term_labels": [
        "amygdala pyramidal neuron"
      ],
      "supporting_source_node_names": [
        "Amygdala Hyperactivity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4023110" } }));
