window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030810"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030810",
  "term_label": "Abnormal tongue physiology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.417207,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "HP:0030810",
      "term_label": "Abnormal tongue physiology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0041051",
      "best_source_term_label": "Ageusia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0041051"
      ],
      "supporting_source_term_labels": [
        "Ageusia"
      ],
      "supporting_source_node_names": [
        "Ageusia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "HP:0030810",
      "term_label": "Abnormal tongue physiology",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000223",
      "best_source_term_label": "Abnormality of taste sensation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000223"
      ],
      "supporting_source_term_labels": [
        "Abnormality of taste sensation"
      ],
      "supporting_source_node_names": [
        "Abnormal taste sensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030810" } }));
