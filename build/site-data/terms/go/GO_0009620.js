window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009620"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009620",
  "term_label": "response to fungus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.159289,
  "mean_score": 0.159289,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "GO:0009620",
      "term_label": "response to fungus",
      "score": 0.159289,
      "direct_score": 0.0,
      "propagated_score": 0.159289,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0050832",
      "best_source_term_label": "defense response to fungus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050832"
      ],
      "supporting_source_term_labels": [
        "defense response to fungus"
      ],
      "supporting_source_node_names": [
        "Local innate immune activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009620" } }));
