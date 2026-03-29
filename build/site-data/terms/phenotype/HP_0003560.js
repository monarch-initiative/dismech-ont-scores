window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003560"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003560",
  "term_label": "Muscular dystrophy",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "HP:0003560",
      "term_label": "Muscular dystrophy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003560",
      "best_source_term_label": "Muscular dystrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003560"
      ],
      "supporting_source_term_labels": [
        "Muscular dystrophy"
      ],
      "supporting_source_node_names": [
        "Muscular dystrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Epidermolysis Bullosa Simplex",
      "disease_term_id": "MONDO:0017610",
      "source_file": "Epidermolysis_Bullosa_Simplex.yaml",
      "term_id": "HP:0003560",
      "term_label": "Muscular dystrophy",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003560",
      "best_source_term_label": "Muscular dystrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003560"
      ],
      "supporting_source_term_labels": [
        "Muscular dystrophy"
      ],
      "supporting_source_node_names": [
        "Muscular Dystrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003560" } }));
