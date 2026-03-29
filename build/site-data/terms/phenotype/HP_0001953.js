window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001953"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001953",
  "term_label": "Diabetic ketoacidosis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.512,
  "mean_score": 0.512,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0001953",
      "term_label": "Diabetic ketoacidosis",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001953",
      "best_source_term_label": "Diabetic ketoacidosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001953"
      ],
      "supporting_source_term_labels": [
        "Diabetic ketoacidosis"
      ],
      "supporting_source_node_names": [
        "Diabetic ketoacidosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "HP:0001953",
      "term_label": "Diabetic ketoacidosis",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001953",
      "best_source_term_label": "Diabetic ketoacidosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001953"
      ],
      "supporting_source_term_labels": [
        "Diabetic ketoacidosis"
      ],
      "supporting_source_node_names": [
        "Diabetic Ketoacidosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001953" } }));
