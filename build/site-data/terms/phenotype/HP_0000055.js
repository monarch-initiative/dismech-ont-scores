window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000055"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000055",
  "term_label": "Abnormal female external genitalia morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2401,
  "mean_score": 0.2401,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "HP:0000055",
      "term_label": "Abnormal female external genitalia morphology",
      "score": 0.2401,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0008665",
      "best_source_term_label": "Clitoral hypertrophy",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008665"
      ],
      "supporting_source_term_labels": [
        "Clitoral hypertrophy"
      ],
      "supporting_source_node_names": [
        "Clitoromegaly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000055" } }));
