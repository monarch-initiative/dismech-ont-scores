window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000012"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000012",
  "term_label": "Urinary urgency",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Benign Prostatic Hyperplasia",
      "disease_term_id": "MONDO:0010811",
      "source_file": "Benign_Prostatic_Hyperplasia.yaml",
      "term_id": "HP:0000012",
      "term_label": "Urinary urgency",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000012",
      "best_source_term_label": "Urinary urgency",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000012"
      ],
      "supporting_source_term_labels": [
        "Urinary urgency"
      ],
      "supporting_source_node_names": [
        "Urinary Frequency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000012" } }));
