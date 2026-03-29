window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060420"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060420",
  "term_label": "regulation of heart growth",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Heart Failure",
      "disease_term_id": "MONDO:0005252",
      "source_file": "Heart_Failure.yaml",
      "term_id": "GO:0060420",
      "term_label": "regulation of heart growth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0060420",
      "best_source_term_label": "regulation of heart growth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060420"
      ],
      "supporting_source_term_labels": [
        "regulation of heart growth"
      ],
      "supporting_source_node_names": [
        "Ventricular Remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060420" } }));
