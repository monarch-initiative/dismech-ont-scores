window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011037"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011037",
  "term_label": "Decreased urine output",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "HP:0011037",
      "term_label": "Decreased urine output",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100520",
      "best_source_term_label": "Oliguria",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100520"
      ],
      "supporting_source_term_labels": [
        "Oliguria"
      ],
      "supporting_source_node_names": [
        "Oliguria"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "HP:0011037",
      "term_label": "Decreased urine output",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100520",
      "best_source_term_label": "Oliguria",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100520"
      ],
      "supporting_source_term_labels": [
        "Oliguria"
      ],
      "supporting_source_node_names": [
        "Oliguria"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011037" } }));
