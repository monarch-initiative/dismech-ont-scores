window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1990399"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1990399",
  "term_label": "epithelium regeneration",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.666667,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "GO:1990399",
      "term_label": "epithelium regeneration",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:1990399",
      "best_source_term_label": "epithelium regeneration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1990399"
      ],
      "supporting_source_term_labels": [
        "epithelium regeneration"
      ],
      "supporting_source_node_names": [
        "Iron and heme-driven oxidative injury and chronic remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1990399" } }));
