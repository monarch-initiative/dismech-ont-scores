window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006801"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006801",
  "term_label": "superoxide metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hypertensive Heart Disease",
      "disease_term_id": "MONDO:0001302",
      "source_file": "Hypertensive_Heart_Disease.yaml",
      "term_id": "GO:0006801",
      "term_label": "superoxide metabolic process",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006801",
      "best_source_term_label": "superoxide metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006801"
      ],
      "supporting_source_term_labels": [
        "superoxide metabolic process"
      ],
      "supporting_source_node_names": [
        "Oxidative Stress and Mitochondrial Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006801" } }));
