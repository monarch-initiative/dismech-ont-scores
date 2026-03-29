window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008070"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008070",
  "term_label": "Sparse hair",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cardiofaciocutaneous Syndrome",
      "disease_term_id": "MONDO:0015280",
      "source_file": "Cardiofaciocutaneous_Syndrome.yaml",
      "term_id": "HP:0008070",
      "term_label": "Sparse hair",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0008070",
      "best_source_term_label": "Sparse hair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008070"
      ],
      "supporting_source_term_labels": [
        "Sparse hair"
      ],
      "supporting_source_node_names": [
        "Sparse Hair"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Coffin-Siris syndrome",
      "disease_term_id": "MONDO:0015452",
      "source_file": "Coffin_Siris_Syndrome.yaml",
      "term_id": "HP:0008070",
      "term_label": "Sparse hair",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002209",
      "best_source_term_label": "Sparse scalp hair",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002209"
      ],
      "supporting_source_term_labels": [
        "Sparse scalp hair"
      ],
      "supporting_source_node_names": [
        "Sparse scalp hair"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008070" } }));
