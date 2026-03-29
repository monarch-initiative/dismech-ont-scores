window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035733"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035733",
  "term_label": "hepatic stellate cell activation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.4096,
  "mean_score": 0.371467,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0035733",
      "term_label": "hepatic stellate cell activation",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035733",
      "best_source_term_label": "hepatic stellate cell activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035733"
      ],
      "supporting_source_term_labels": [
        "hepatic stellate cell activation"
      ],
      "supporting_source_node_names": [
        "Hepatic Stellate Cell Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hepatitis C",
      "disease_term_id": "MONDO:0005231",
      "source_file": "Hepatitis_C.yaml",
      "term_id": "GO:0035733",
      "term_label": "hepatic stellate cell activation",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035733",
      "best_source_term_label": "hepatic stellate cell activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035733"
      ],
      "supporting_source_term_labels": [
        "hepatic stellate cell activation"
      ],
      "supporting_source_node_names": [
        "Chronic Inflammation and Fibrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035733" } }));
