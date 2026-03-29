window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007214"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007214",
  "term_label": "gamma-aminobutyric acid signaling pathway",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.833333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Guanidinoacetate Methyltransferase Deficiency",
      "disease_term_id": "MONDO:0012999",
      "source_file": "Guanidinoacetate_Methyltransferase_Deficiency.yaml",
      "term_id": "GO:0007214",
      "term_label": "gamma-aminobutyric acid signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0007214",
      "best_source_term_label": "gamma-aminobutyric acid signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007214"
      ],
      "supporting_source_term_labels": [
        "gamma-aminobutyric acid signaling pathway"
      ],
      "supporting_source_node_names": [
        "Guanidinoacetate neurotoxicity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0007214",
      "term_label": "gamma-aminobutyric acid signaling pathway",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0007214",
      "best_source_term_label": "gamma-aminobutyric acid signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007214"
      ],
      "supporting_source_term_labels": [
        "gamma-aminobutyric acid signaling pathway"
      ],
      "supporting_source_node_names": [
        "Disturbed Developmental GABA Switch"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007214" } }));
