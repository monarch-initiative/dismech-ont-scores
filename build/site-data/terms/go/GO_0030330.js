window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030330"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030330",
  "term_label": "DNA damage response, signal transduction by p53 class mediator",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0030330",
      "term_label": "DNA damage response, signal transduction by p53 class mediator",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030330",
      "best_source_term_label": "DNA damage response, signal transduction by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "GO:0030330",
      "term_label": "DNA damage response, signal transduction by p53 class mediator",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030330",
      "best_source_term_label": "DNA damage response, signal transduction by p53 class mediator",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030330"
      ],
      "supporting_source_term_labels": [
        "DNA damage response, signal transduction by p53 class mediator"
      ],
      "supporting_source_node_names": [
        "Loss of DNA Damage Response"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030330" } }));
