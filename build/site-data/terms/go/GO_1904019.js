window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1904019"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1904019",
  "term_label": "epithelial cell apoptotic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.3584,
  "mean_score": 0.3584,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:1904019",
      "term_label": "epithelial cell apoptotic process",
      "score": 0.3584,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0097284",
      "best_source_term_label": "hepatocyte apoptotic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0097284"
      ],
      "supporting_source_term_labels": [
        "hepatocyte apoptotic process"
      ],
      "supporting_source_node_names": [
        "Hepatocellular Oxidative Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1904019" } }));
