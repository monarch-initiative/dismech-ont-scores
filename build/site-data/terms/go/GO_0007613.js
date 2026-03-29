window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007613"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007613",
  "term_label": "memory",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.307692,
  "mean_score": 0.307692,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0007613",
      "term_label": "memory",
      "score": 0.307692,
      "direct_score": 0.307692,
      "propagated_score": 0.307692,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007613",
      "best_source_term_label": "memory",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007613"
      ],
      "supporting_source_term_labels": [
        "memory"
      ],
      "supporting_source_node_names": [
        "Vagus-Hippocampal Signaling Impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007613" } }));
