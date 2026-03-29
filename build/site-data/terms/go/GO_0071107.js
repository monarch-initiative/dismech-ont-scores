window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071107"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071107",
  "term_label": "response to parathyroid hormone",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.294118,
  "mean_score": 0.294118,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "GO:0071107",
      "term_label": "response to parathyroid hormone",
      "score": 0.294118,
      "direct_score": 0.294118,
      "propagated_score": 0.294118,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0071107",
      "best_source_term_label": "response to parathyroid hormone",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071107"
      ],
      "supporting_source_term_labels": [
        "response to parathyroid hormone"
      ],
      "supporting_source_node_names": [
        "Renal PTH Resistance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071107" } }));
