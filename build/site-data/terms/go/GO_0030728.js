window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030728"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030728",
  "term_label": "ovulation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0030728",
      "term_label": "ovulation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0030728",
      "best_source_term_label": "ovulation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030728"
      ],
      "supporting_source_term_labels": [
        "ovulation"
      ],
      "supporting_source_node_names": [
        "Ovulatory Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030728" } }));
