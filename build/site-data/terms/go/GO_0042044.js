window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042044"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042044",
  "term_label": "fluid transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.097564,
  "mean_score": 0.097564,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0042044",
      "term_label": "fluid transport",
      "score": 0.097564,
      "direct_score": 0.0,
      "propagated_score": 0.097564,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0070295",
      "best_source_term_label": "renal water absorption",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070295"
      ],
      "supporting_source_term_labels": [
        "renal water absorption"
      ],
      "supporting_source_node_names": [
        "Impaired Tubular Reabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042044" } }));
