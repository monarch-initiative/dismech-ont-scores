window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001430"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001430",
  "term_label": "Abnormal calf musculature morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Duchenne Muscular Dystrophy",
      "disease_term_id": "MONDO:0010679",
      "source_file": "Duchenne_Muscular_Dystrophy.yaml",
      "term_id": "HP:0001430",
      "term_label": "Abnormal calf musculature morphology",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003707",
      "best_source_term_label": "Calf muscle pseudohypertrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003707"
      ],
      "supporting_source_term_labels": [
        "Calf muscle pseudohypertrophy"
      ],
      "supporting_source_node_names": [
        "Pseudohypertrophy of Calves"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001430" } }));
