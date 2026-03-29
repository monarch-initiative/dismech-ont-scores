window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003323"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003323",
  "term_label": "Progressive muscle weakness",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Spinal Muscular Atrophy",
      "disease_term_id": "MONDO:0001516",
      "source_file": "Spinal_Muscular_Atrophy.yaml",
      "term_id": "HP:0003323",
      "term_label": "Progressive muscle weakness",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003323",
      "best_source_term_label": "Progressive muscle weakness",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003323"
      ],
      "supporting_source_term_labels": [
        "Progressive muscle weakness"
      ],
      "supporting_source_node_names": [
        "Progressive Muscle Weakness"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Duchenne Muscular Dystrophy",
      "disease_term_id": "MONDO:0010679",
      "source_file": "Duchenne_Muscular_Dystrophy.yaml",
      "term_id": "HP:0003323",
      "term_label": "Progressive muscle weakness",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003323",
      "best_source_term_label": "Progressive muscle weakness",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003323"
      ],
      "supporting_source_term_labels": [
        "Progressive muscle weakness"
      ],
      "supporting_source_node_names": [
        "Progressive Muscle Weakness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003323" } }));
