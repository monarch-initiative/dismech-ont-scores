window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004447"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004447",
  "term_label": "Poikilocytosis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0004447",
      "term_label": "Poikilocytosis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0034280",
      "best_source_term_label": "Target cells",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0034280"
      ],
      "supporting_source_term_labels": [
        "Target cells"
      ],
      "supporting_source_node_names": [
        "Target Cells"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hereditary Spherocytosis",
      "disease_term_id": "MONDO:0019350",
      "source_file": "Hereditary_Spherocytosis.yaml",
      "term_id": "HP:0004447",
      "term_label": "Poikilocytosis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0004444",
      "best_source_term_label": "Spherocytosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004444"
      ],
      "supporting_source_term_labels": [
        "Spherocytosis"
      ],
      "supporting_source_node_names": [
        "Spherocytosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004447" } }));
