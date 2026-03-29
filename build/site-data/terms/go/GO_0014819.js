window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0014819"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0014819",
  "term_label": "regulation of skeletal muscle contraction",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28,
  "mean_score": 0.28,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0014819",
      "term_label": "regulation of skeletal muscle contraction",
      "score": 0.28,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0014722",
      "best_source_term_label": "regulation of skeletal muscle contraction by calcium ion signaling",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0014819" } }));
