window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012131"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012131",
  "term_label": "Abnormal number of erythroid precursors",
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
      "term_id": "HP:0012131",
      "term_label": "Abnormal number of erythroid precursors",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012132",
      "best_source_term_label": "Erythroid hyperplasia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012132"
      ],
      "supporting_source_term_labels": [
        "Erythroid hyperplasia"
      ],
      "supporting_source_node_names": [
        "Erythroid Hyperplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "HP:0012131",
      "term_label": "Abnormal number of erythroid precursors",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012410",
      "best_source_term_label": "Pure red cell aplasia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012410"
      ],
      "supporting_source_term_labels": [
        "Pure red cell aplasia"
      ],
      "supporting_source_node_names": [
        "Pure Red Cell Aplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012131" } }));
