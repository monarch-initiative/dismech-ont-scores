window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0010011"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0010011",
  "term_label": "cerebral cortex GABAergic interneuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.237918,
  "mean_score": 0.237918,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "CTCF-related Neurodevelopmental Disorder",
      "disease_term_id": "MONDO:0700294",
      "source_file": "CTCF-related_Neurodevelopmental_Disorder.yaml",
      "term_id": "CL:0010011",
      "term_label": "cerebral cortex GABAergic interneuron",
      "score": 0.237918,
      "direct_score": 0.237918,
      "propagated_score": 0.237918,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0010011",
      "best_source_term_label": "cerebral cortex GABAergic interneuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0010011" } }));
