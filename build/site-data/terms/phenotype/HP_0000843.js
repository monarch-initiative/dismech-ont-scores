window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000843"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000843",
  "term_label": "Hyperparathyroidism",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.622697,
  "mean_score": 0.561349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Nephronophthisis",
      "disease_term_id": "MONDO:0019005",
      "source_file": "Nephronophthisis.yaml",
      "term_id": "HP:0000843",
      "term_label": "Hyperparathyroidism",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000867",
      "best_source_term_label": "Secondary hyperparathyroidism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000867"
      ],
      "supporting_source_term_labels": [
        "Secondary hyperparathyroidism"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0000843",
      "term_label": "Hyperparathyroidism",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000843",
      "best_source_term_label": "Hyperparathyroidism",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000843"
      ],
      "supporting_source_term_labels": [
        "Hyperparathyroidism"
      ],
      "supporting_source_node_names": [
        "Primary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000843" } }));
