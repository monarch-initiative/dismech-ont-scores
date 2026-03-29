window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001993"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001993",
  "term_label": "Ketoacidosis",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.530446,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "HP:0001993",
      "term_label": "Ketoacidosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0001993",
      "best_source_term_label": "Ketoacidosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001993"
      ],
      "supporting_source_term_labels": [
        "Ketoacidosis"
      ],
      "supporting_source_node_names": [
        "Episodic ketoacidosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0001993",
      "term_label": "Ketoacidosis",
      "score": 0.295669,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001953",
      "best_source_term_label": "Diabetic ketoacidosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:0001993",
      "term_label": "Ketoacidosis",
      "score": 0.295669,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001953",
      "best_source_term_label": "Diabetic ketoacidosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001993" } }));
