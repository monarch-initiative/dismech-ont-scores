window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072678"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072678",
  "term_label": "T cell migration",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.384615,
  "mean_score": 0.384615,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0072678",
      "term_label": "T cell migration",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0072678",
      "best_source_term_label": "T cell migration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072678"
      ],
      "supporting_source_term_labels": [
        "T cell migration"
      ],
      "supporting_source_node_names": [
        "T Cell Exhaustion and Tissue Trafficking"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072678" } }));
