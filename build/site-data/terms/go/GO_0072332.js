window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072332"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072332",
  "term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.526316,
  "mean_score": 0.463158,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0072332",
      "term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
      "score": 0.526316,
      "direct_score": 0.526316,
      "propagated_score": 0.526316,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0072332",
      "best_source_term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072332"
      ],
      "supporting_source_term_labels": [
        "intrinsic apoptotic signaling pathway by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "iPSC-Revealed p53-Driven Progenitor Exhaustion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "GO:0072332",
      "term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0072332",
      "best_source_term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072332"
      ],
      "supporting_source_term_labels": [
        "intrinsic apoptotic signaling pathway by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "Impaired Apoptosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072332" } }));
