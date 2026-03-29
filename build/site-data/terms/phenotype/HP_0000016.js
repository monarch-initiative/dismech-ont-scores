window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000016"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000016",
  "term_label": "Urinary retention",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Benign Prostatic Hyperplasia",
      "disease_term_id": "MONDO:0010811",
      "source_file": "Benign_Prostatic_Hyperplasia.yaml",
      "term_id": "HP:0000016",
      "term_label": "Urinary retention",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000016",
      "best_source_term_label": "Urinary retention",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000016"
      ],
      "supporting_source_term_labels": [
        "Urinary retention"
      ],
      "supporting_source_node_names": [
        "Hesitancy",
        "Incomplete Emptying",
        "Urinary Retention",
        "Weak Urinary Stream"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000016" } }));
