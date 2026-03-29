window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019226"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019226",
  "term_label": "transmission of nerve impulse",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.622392,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Epilepsy",
      "disease_term_id": "MONDO:0005027",
      "source_file": "Epilepsy.yaml",
      "term_id": "GO:0019226",
      "term_label": "transmission of nerve impulse",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0019226",
      "best_source_term_label": "transmission of nerve impulse",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019226"
      ],
      "supporting_source_term_labels": [
        "transmission of nerve impulse"
      ],
      "supporting_source_node_names": [
        "Network Hyperexcitability"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "GO:0019226",
      "term_label": "transmission of nerve impulse",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0019228",
      "best_source_term_label": "neuronal action potential",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019228"
      ],
      "supporting_source_term_labels": [
        "neuronal action potential"
      ],
      "supporting_source_node_names": [
        "SCN1A Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019226" } }));
