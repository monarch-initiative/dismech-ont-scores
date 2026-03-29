window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006817"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006817",
  "term_label": "phosphate ion transport",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.227556,
  "mean_score": 0.227556,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0006817",
      "term_label": "phosphate ion transport",
      "score": 0.227556,
      "direct_score": 0.227556,
      "propagated_score": 0.227556,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006817",
      "best_source_term_label": "phosphate ion transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006817"
      ],
      "supporting_source_term_labels": [
        "phosphate ion transport"
      ],
      "supporting_source_node_names": [
        "Renal Phosphate Wasting"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006817" } }));
