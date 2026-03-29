window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0140896"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0140896",
  "term_label": "cGAS/STING signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hepatitis B",
      "disease_term_id": "MONDO:0005344",
      "source_file": "Hepatitis_B.yaml",
      "term_id": "GO:0140896",
      "term_label": "cGAS/STING signaling pathway",
      "score": 0.625,
      "direct_score": 0.625,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0140896",
      "best_source_term_label": "cGAS/STING signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0140896"
      ],
      "supporting_source_term_labels": [
        "cGAS/STING signaling pathway"
      ],
      "supporting_source_node_names": [
        "Immune Evasion and T Cell Exhaustion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0140896" } }));
