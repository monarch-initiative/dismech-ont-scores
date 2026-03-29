window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0200035"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0200035",
  "term_label": "Skin plaque",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.649021,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Chromoblastomycosis",
      "disease_term_id": "MONDO:0015908",
      "source_file": "Chromoblastomycosis.yaml",
      "term_id": "HP:0200035",
      "term_label": "Skin plaque",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0200035",
      "best_source_term_label": "Skin plaque",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200035"
      ],
      "supporting_source_term_labels": [
        "Skin plaque"
      ],
      "supporting_source_node_names": [
        "Skin plaque"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Psoriasis",
      "disease_term_id": "MONDO:0005083",
      "source_file": "Psoriasis.yaml",
      "term_id": "HP:0200035",
      "term_label": "Skin plaque",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0025474",
      "best_source_term_label": "Erythematous plaque",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:0200035",
      "term_label": "Skin plaque",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0025474",
      "best_source_term_label": "Erythematous plaque",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0200035" } }));
