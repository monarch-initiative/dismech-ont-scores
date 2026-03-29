window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0008031"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0008031",
  "term_label": "cortical interneuron",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.574075,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Visual Snow Syndrome",
      "disease_term_id": "MONDO:0018486",
      "source_file": "Visual_Snow_Syndrome.yaml",
      "term_id": "CL:0008031",
      "term_label": "cortical interneuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0008031",
      "best_source_term_label": "cortical interneuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0008031"
      ],
      "supporting_source_term_labels": [
        "cortical interneuron"
      ],
      "supporting_source_node_names": [
        "Visual Cortex Hyperexcitability"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "CTCF-related Neurodevelopmental Disorder",
      "disease_term_id": "MONDO:0700294",
      "source_file": "CTCF-related_Neurodevelopmental_Disorder.yaml",
      "term_id": "CL:0008031",
      "term_label": "cortical interneuron",
      "score": 0.148151,
      "direct_score": 0.0,
      "propagated_score": 0.166543,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0010011",
      "best_source_term_label": "cerebral cortex GABAergic interneuron",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0010011"
      ],
      "supporting_source_term_labels": [
        "cerebral cortex GABAergic interneuron"
      ],
      "supporting_source_node_names": [
        "Abnormal Neural Progenitor Cell Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0008031" } }));
