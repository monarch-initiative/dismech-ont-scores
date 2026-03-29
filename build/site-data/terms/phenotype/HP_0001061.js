window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001061"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001061",
  "term_label": "Acne",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.904753,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "HP:0001061",
      "term_label": "Acne",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001061",
      "best_source_term_label": "Acne",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001061"
      ],
      "supporting_source_term_labels": [
        "Acne"
      ],
      "supporting_source_node_names": [
        "Acne"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "HP:0001061",
      "term_label": "Acne",
      "score": 0.809506,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0040137",
      "best_source_term_label": "Comedonal acne",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033188",
        "HP:0040137"
      ],
      "supporting_source_term_labels": [
        "Comedonal acne",
        "Cystic acne"
      ],
      "supporting_source_node_names": [
        "Comedones",
        "Nodules and cysts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001061" } }));
