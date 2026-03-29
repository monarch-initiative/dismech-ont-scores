window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0031960"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0031960",
  "term_label": "response to corticosteroid",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "GO:0031960",
      "term_label": "response to corticosteroid",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0051384",
      "best_source_term_label": "response to glucocorticoid",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051384"
      ],
      "supporting_source_term_labels": [
        "response to glucocorticoid"
      ],
      "supporting_source_node_names": [
        "Metabolic Consequences of Hypercortisolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "GO:0031960",
      "term_label": "response to corticosteroid",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0071385",
      "best_source_term_label": "cellular response to glucocorticoid stimulus",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0031960" } }));
