window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033015"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033015",
  "term_label": "tetrapyrrole catabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gilbert's Syndrome",
      "disease_term_id": "MONDO:0007745",
      "source_file": "Gilberts_Syndrome.yaml",
      "term_id": "GO:0033015",
      "term_label": "tetrapyrrole catabolic process",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006789",
      "best_source_term_label": "bilirubin conjugation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006789"
      ],
      "supporting_source_term_labels": [
        "bilirubin conjugation"
      ],
      "supporting_source_node_names": [
        "Reduced UGT1A1 Activity and Impaired Bilirubin Glucuronidation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "GO:0033015",
      "term_label": "tetrapyrrole catabolic process",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042167",
      "best_source_term_label": "heme catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042167"
      ],
      "supporting_source_term_labels": [
        "heme catabolic process"
      ],
      "supporting_source_node_names": [
        "Alveolar hemorrhage and hemosiderin accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033015" } }));
