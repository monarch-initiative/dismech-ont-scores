window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006997"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006997",
  "term_label": "nucleus organization",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.367647,
  "mean_score": 0.367647,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0006997",
      "term_label": "nucleus organization",
      "score": 0.367647,
      "direct_score": 0.0,
      "propagated_score": 0.367647,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0006998",
      "best_source_term_label": "nuclear envelope organization",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006998"
      ],
      "supporting_source_term_labels": [
        "nuclear envelope organization"
      ],
      "supporting_source_node_names": [
        "Nuclear Envelope Disruption (ACTA1)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006997" } }));
