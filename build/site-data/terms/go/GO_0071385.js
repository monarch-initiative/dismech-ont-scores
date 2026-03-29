window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071385"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071385",
  "term_label": "cellular response to glucocorticoid stimulus",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "GO:0071385",
      "term_label": "cellular response to glucocorticoid stimulus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0071385",
      "best_source_term_label": "cellular response to glucocorticoid stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071385"
      ],
      "supporting_source_term_labels": [
        "cellular response to glucocorticoid stimulus"
      ],
      "supporting_source_node_names": [
        "HPA Axis Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071385" } }));
