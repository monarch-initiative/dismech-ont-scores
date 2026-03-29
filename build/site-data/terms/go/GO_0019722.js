window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019722"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019722",
  "term_label": "calcium-mediated signaling",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.72731,
  "mean_score": 0.488194,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "GO:0019722",
      "term_label": "calcium-mediated signaling",
      "score": 0.72731,
      "direct_score": 0.0,
      "propagated_score": 0.8176,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0097720",
      "best_source_term_label": "calcineurin-mediated signaling",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0033173",
        "GO:0097720"
      ],
      "supporting_source_term_labels": [
        "calcineurin-NFAT signaling cascade",
        "calcineurin-mediated signaling"
      ],
      "supporting_source_node_names": [
        "Impaired NFAT signaling",
        "Loss of calcineurin phosphatase activity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0019722",
      "term_label": "calcium-mediated signaling",
      "score": 0.249079,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.889567,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019722" } }));
