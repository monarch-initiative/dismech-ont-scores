window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0011103"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0011103",
  "term_label": "sympathetic neuron",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "CL:0011103",
      "term_label": "sympathetic neuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0011103",
      "best_source_term_label": "sympathetic neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011103"
      ],
      "supporting_source_term_labels": [
        "sympathetic neuron"
      ],
      "supporting_source_node_names": [
        "Sympathetic Nervous System Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "CL:0011103",
      "term_label": "sympathetic neuron",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0011103",
      "best_source_term_label": "sympathetic neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011103"
      ],
      "supporting_source_term_labels": [
        "sympathetic neuron"
      ],
      "supporting_source_node_names": [
        "Sympathetic Denervation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0011103" } }));
