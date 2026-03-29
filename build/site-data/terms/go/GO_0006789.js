window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006789"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006789",
  "term_label": "bilirubin conjugation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gilbert's Syndrome",
      "disease_term_id": "MONDO:0007745",
      "source_file": "Gilberts_Syndrome.yaml",
      "term_id": "GO:0006789",
      "term_label": "bilirubin conjugation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006789",
      "best_source_term_label": "bilirubin conjugation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006789" } }));
