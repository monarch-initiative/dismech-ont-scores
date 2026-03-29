window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025474"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025474",
  "term_label": "Erythematous plaque",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Psoriasis",
      "disease_term_id": "MONDO:0005083",
      "source_file": "Psoriasis.yaml",
      "term_id": "HP:0025474",
      "term_label": "Erythematous plaque",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025474",
      "best_source_term_label": "Erythematous plaque",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025474"
      ],
      "supporting_source_term_labels": [
        "Erythematous plaque"
      ],
      "supporting_source_node_names": [
        "Erythematous Plaques"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Seborrheic Dermatitis",
      "disease_term_id": "MONDO:0006608",
      "source_file": "Seborrheic_Dermatitis.yaml",
      "term_id": "HP:0025474",
      "term_label": "Erythematous plaque",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025474",
      "best_source_term_label": "Erythematous plaque",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025474"
      ],
      "supporting_source_term_labels": [
        "Erythematous plaque"
      ],
      "supporting_source_node_names": [
        "Erythematous patches and plaques"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025474" } }));
