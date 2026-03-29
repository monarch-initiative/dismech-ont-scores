window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0140353"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0140353",
  "term_label": "lipid export from cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343,
  "mean_score": 0.343,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "GO:0140353",
      "term_label": "lipid export from cell",
      "score": 0.343,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0035933",
      "best_source_term_label": "glucocorticoid secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035933"
      ],
      "supporting_source_term_labels": [
        "glucocorticoid secretion"
      ],
      "supporting_source_node_names": [
        "Chronic Cortisol Excess"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0140353" } }));
