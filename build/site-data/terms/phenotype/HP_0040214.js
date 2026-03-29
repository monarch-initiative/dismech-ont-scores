window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0040214"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0040214",
  "term_label": "Abnormal circulating insulin concentration",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0040214",
      "term_label": "Abnormal circulating insulin concentration",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000842",
      "best_source_term_label": "Hyperinsulinemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000842"
      ],
      "supporting_source_term_labels": [
        "Hyperinsulinemia"
      ],
      "supporting_source_node_names": [
        "Hyperinsulinemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Type 2 Diabetes Mellitus",
      "disease_term_id": "MONDO:0005148",
      "source_file": "Type_2_Diabetes_Mellitus.yaml",
      "term_id": "HP:0040214",
      "term_label": "Abnormal circulating insulin concentration",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000842",
      "best_source_term_label": "Hyperinsulinemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000842"
      ],
      "supporting_source_term_labels": [
        "Hyperinsulinemia"
      ],
      "supporting_source_node_names": [
        "Hyperinsulinemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0040214" } }));
