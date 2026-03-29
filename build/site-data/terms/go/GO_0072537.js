window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072537"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072537",
  "term_label": "fibroblast activation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.255057,
  "mean_score": 0.231312,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0072537",
      "term_label": "fibroblast activation",
      "score": 0.255057,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0035733",
      "best_source_term_label": "hepatic stellate cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0072537",
      "term_label": "fibroblast activation",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0035733",
      "best_source_term_label": "hepatic stellate cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072537" } }));
