window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004890"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004890",
  "term_label": "Elevated pulmonary artery pressure",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.602823,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0004890",
      "term_label": "Elevated pulmonary artery pressure",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0004890",
      "best_source_term_label": "Elevated pulmonary artery pressure",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004890"
      ],
      "supporting_source_term_labels": [
        "Elevated pulmonary artery pressure"
      ],
      "supporting_source_node_names": [
        "Pulmonary Hypertension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "HP:0004890",
      "term_label": "Elevated pulmonary artery pressure",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002092",
      "best_source_term_label": "Pulmonary arterial hypertension",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002092"
      ],
      "supporting_source_term_labels": [
        "Pulmonary arterial hypertension"
      ],
      "supporting_source_node_names": [
        "Pulmonary hypertension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "HP:0004890",
      "term_label": "Elevated pulmonary artery pressure",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002092",
      "best_source_term_label": "Pulmonary arterial hypertension",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002092"
      ],
      "supporting_source_term_labels": [
        "Pulmonary arterial hypertension"
      ],
      "supporting_source_node_names": [
        "Pulmonary arterial hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004890" } }));
