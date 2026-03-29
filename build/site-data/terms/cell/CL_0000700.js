window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000700"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000700",
  "term_label": "dopaminergic neuron",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.555555,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "CL:0000700",
      "term_label": "dopaminergic neuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000700",
      "best_source_term_label": "dopaminergic neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000700"
      ],
      "supporting_source_term_labels": [
        "dopaminergic neuron"
      ],
      "supporting_source_node_names": [
        "Autophagy-Lysosome Pathway Dysfunction",
        "Calcium Dysregulation",
        "Dopaminergic Neuron Loss",
        "Endoplasmic Reticulum Stress",
        "Iron Accumulation and Ferroptosis",
        "Oxidative Stress",
        "Synaptic Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Bipolar Disorder",
      "disease_term_id": "MONDO:0004985",
      "source_file": "Bipolar_Disorder.yaml",
      "term_id": "CL:0000700",
      "term_label": "dopaminergic neuron",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000700",
      "best_source_term_label": "dopaminergic neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000700"
      ],
      "supporting_source_term_labels": [
        "dopaminergic neuron"
      ],
      "supporting_source_node_names": [
        "Monoamine Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "CL:0000700",
      "term_label": "dopaminergic neuron",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000700",
      "best_source_term_label": "dopaminergic neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000700"
      ],
      "supporting_source_term_labels": [
        "dopaminergic neuron"
      ],
      "supporting_source_node_names": [
        "Monoamine Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000700" } }));
