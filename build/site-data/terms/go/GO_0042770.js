window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042770"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042770",
  "term_label": "signal transduction in response to DNA damage",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.560427,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0042770",
      "term_label": "signal transduction in response to DNA damage",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
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
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "GO:0042770",
      "term_label": "signal transduction in response to DNA damage",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
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
        "Loss of DNA Damage Response"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042770" } }));
