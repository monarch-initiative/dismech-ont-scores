window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000598"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000598",
  "term_label": "pyramidal neuron",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.577478,
  "mean_score": 0.496616,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Generalized Anxiety Disorder",
      "disease_term_id": "MONDO:0001942",
      "source_file": "Generalized_Anxiety_Disorder.yaml",
      "term_id": "CL:0000598",
      "term_label": "pyramidal neuron",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:4023110",
      "best_source_term_label": "amygdala pyramidal neuron",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "cell",
      "disorder_name": "Epilepsy",
      "disease_term_id": "MONDO:0005027",
      "source_file": "Epilepsy.yaml",
      "term_id": "CL:0000598",
      "term_label": "pyramidal neuron",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000598",
      "best_source_term_label": "pyramidal neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000598"
      ],
      "supporting_source_term_labels": [
        "pyramidal neuron"
      ],
      "supporting_source_node_names": [
        "Neuronal Hyperexcitability"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "CL:0000598",
      "term_label": "pyramidal neuron",
      "score": 0.412371,
      "direct_score": 0.412371,
      "propagated_score": 0.412371,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000598",
      "best_source_term_label": "pyramidal neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000598"
      ],
      "supporting_source_term_labels": [
        "pyramidal neuron"
      ],
      "supporting_source_node_names": [
        "Cortical Spreading Depression in FHM1"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000598" } }));
