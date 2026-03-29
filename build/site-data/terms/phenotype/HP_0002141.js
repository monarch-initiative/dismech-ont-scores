window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002141"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002141",
  "term_label": "Gait imbalance",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "HP:0002141",
      "term_label": "Gait imbalance",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002141",
      "best_source_term_label": "Gait imbalance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002141"
      ],
      "supporting_source_term_labels": [
        "Gait imbalance"
      ],
      "supporting_source_node_names": [
        "Postural imbalance"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "HP:0002141",
      "term_label": "Gait imbalance",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002141",
      "best_source_term_label": "Gait imbalance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002141"
      ],
      "supporting_source_term_labels": [
        "Gait imbalance"
      ],
      "supporting_source_node_names": [
        "Chronic Disequilibrium"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002141" } }));
