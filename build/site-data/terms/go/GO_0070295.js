window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070295"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070295",
  "term_label": "renal water absorption",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.284444,
  "mean_score": 0.284444,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0070295",
      "term_label": "renal water absorption",
      "score": 0.284444,
      "direct_score": 0.284444,
      "propagated_score": 0.284444,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0070295",
      "best_source_term_label": "renal water absorption",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070295" } }));
