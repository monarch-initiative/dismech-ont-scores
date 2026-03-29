window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1990778"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1990778",
  "term_label": "protein localization to cell periphery",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.243056,
  "mean_score": 0.243056,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hereditary Spherocytosis",
      "disease_term_id": "MONDO:0019350",
      "source_file": "Hereditary_Spherocytosis.yaml",
      "term_id": "GO:1990778",
      "term_label": "protein localization to cell periphery",
      "score": 0.243056,
      "direct_score": 0.0,
      "propagated_score": 0.243056,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0072659",
      "best_source_term_label": "protein localization to plasma membrane",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072659"
      ],
      "supporting_source_term_labels": [
        "protein localization to plasma membrane"
      ],
      "supporting_source_node_names": [
        "Red Cell Membrane Protein Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1990778" } }));
