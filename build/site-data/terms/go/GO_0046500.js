window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046500"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046500",
  "term_label": "S-adenosylmethionine metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0046500",
      "term_label": "S-adenosylmethionine metabolic process",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0046500",
      "best_source_term_label": "S-adenosylmethionine metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046500"
      ],
      "supporting_source_term_labels": [
        "S-adenosylmethionine metabolic process"
      ],
      "supporting_source_node_names": [
        "SAM Depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046500" } }));
