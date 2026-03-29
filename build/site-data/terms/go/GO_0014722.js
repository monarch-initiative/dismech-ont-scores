window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0014722"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0014722",
  "term_label": "regulation of skeletal muscle contraction by calcium ion signaling",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0014722",
      "term_label": "regulation of skeletal muscle contraction by calcium ion signaling",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0014722",
      "best_source_term_label": "regulation of skeletal muscle contraction by calcium ion signaling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014722"
      ],
      "supporting_source_term_labels": [
        "regulation of skeletal muscle contraction by calcium ion signaling"
      ],
      "supporting_source_node_names": [
        "Abnormal RyR1 calcium release channel function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0014722" } }));
