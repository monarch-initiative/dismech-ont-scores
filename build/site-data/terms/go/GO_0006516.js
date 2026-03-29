window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006516"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006516",
  "term_label": "glycoprotein catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Beta Mannosidosis",
      "disease_term_id": "MONDO:0009562",
      "source_file": "Beta_Mannosidosis.yaml",
      "term_id": "GO:0006516",
      "term_label": "glycoprotein catabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006516",
      "best_source_term_label": "glycoprotein catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006516"
      ],
      "supporting_source_term_labels": [
        "glycoprotein catabolic process"
      ],
      "supporting_source_node_names": [
        "Beta-mannosidase deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006516" } }));
