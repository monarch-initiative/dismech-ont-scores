window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072331"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072331",
  "term_label": "signal transduction by p53 class mediator",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.569222,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "GO:0072331",
      "term_label": "signal transduction by p53 class mediator",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0072331",
      "best_source_term_label": "signal transduction by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030330",
        "GO:0072331",
        "GO:0072332"
      ],
      "supporting_source_term_labels": [
        "DNA damage response, signal transduction by p53 class mediator",
        "intrinsic apoptotic signaling pathway by p53 class mediator",
        "signal transduction by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "TP53 Tumor Suppressor Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0072331",
      "term_label": "signal transduction by p53 class mediator",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030330",
      "best_source_term_label": "DNA damage response, signal transduction by p53 class mediator",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030330"
      ],
      "supporting_source_term_labels": [
        "DNA damage response, signal transduction by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "TP53 Inactivation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "GO:0072331",
      "term_label": "signal transduction by p53 class mediator",
      "score": 0.444444,
      "direct_score": 0.444444,
      "propagated_score": 0.444444,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0072331",
      "best_source_term_label": "signal transduction by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072331"
      ],
      "supporting_source_term_labels": [
        "signal transduction by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "p53-Mediated Erythroid Apoptosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0072331",
      "term_label": "signal transduction by p53 class mediator",
      "score": 0.28705,
      "direct_score": 0.0,
      "propagated_score": 0.368421,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0072332",
      "best_source_term_label": "intrinsic apoptotic signaling pathway by p53 class mediator",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072331" } }));
