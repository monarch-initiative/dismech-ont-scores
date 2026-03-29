window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0031175"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0031175",
  "term_label": "neuron projection development",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.512,
  "mean_score": 0.333837,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0031175",
      "term_label": "neuron projection development",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0031175",
      "best_source_term_label": "neuron projection development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0031175"
      ],
      "supporting_source_term_labels": [
        "neuron projection development"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Axonopathy"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0031175",
      "term_label": "neuron projection development",
      "score": 0.155674,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007409",
      "best_source_term_label": "axonogenesis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007409"
      ],
      "supporting_source_term_labels": [
        "axonogenesis"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0031175" } }));
