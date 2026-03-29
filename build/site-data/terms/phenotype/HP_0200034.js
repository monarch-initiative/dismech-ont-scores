window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0200034"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0200034",
  "term_label": "Papule",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.508181,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "HP:0200034",
      "term_label": "Papule",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0030350",
      "best_source_term_label": "Erythematous papule",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030350"
      ],
      "supporting_source_term_labels": [
        "Erythematous papule"
      ],
      "supporting_source_node_names": [
        "Inflammatory papules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Chromoblastomycosis",
      "disease_term_id": "MONDO:0015908",
      "source_file": "Chromoblastomycosis.yaml",
      "term_id": "HP:0200034",
      "term_label": "Papule",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012500",
      "best_source_term_label": "Verrucous papule",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012500"
      ],
      "supporting_source_term_labels": [
        "Verrucous papule"
      ],
      "supporting_source_node_names": [
        "Verrucous papule"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Folliculitis",
      "disease_term_id": "MONDO:0006552",
      "source_file": "Folliculitis.yaml",
      "term_id": "HP:0200034",
      "term_label": "Papule",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0030350",
      "best_source_term_label": "Erythematous papule",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030350"
      ],
      "supporting_source_term_labels": [
        "Erythematous papule"
      ],
      "supporting_source_node_names": [
        "Erythematous papules"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0200034" } }));
