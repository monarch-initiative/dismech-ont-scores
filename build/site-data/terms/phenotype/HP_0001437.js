window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001437"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001437",
  "term_label": "Abnormality of the musculature of the lower limbs",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.392,
  "mean_score": 0.392,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Duchenne Muscular Dystrophy",
      "disease_term_id": "MONDO:0010679",
      "source_file": "Duchenne_Muscular_Dystrophy.yaml",
      "term_id": "HP:0001437",
      "term_label": "Abnormality of the musculature of the lower limbs",
      "score": 0.392,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003707",
      "best_source_term_label": "Calf muscle pseudohypertrophy",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001437" } }));
