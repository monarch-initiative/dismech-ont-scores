window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010651"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010651",
  "term_label": "Abnormal meningeal morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.479307,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "D-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0010924",
      "source_file": "D-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "HP:0010651",
      "term_label": "Abnormal meningeal morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:6001070",
      "best_source_term_label": "Subdural hygroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6001070"
      ],
      "supporting_source_term_labels": [
        "Subdural hygroma"
      ],
      "supporting_source_node_names": [
        "Subdural hygroma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "HP:0010651",
      "term_label": "Abnormal meningeal morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002858",
      "best_source_term_label": "Meningioma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002858"
      ],
      "supporting_source_term_labels": [
        "Meningioma"
      ],
      "supporting_source_node_names": [
        "Meningioma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "HP:0010651",
      "term_label": "Abnormal meningeal morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005462",
      "best_source_term_label": "Calcification of falx cerebri",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005462"
      ],
      "supporting_source_term_labels": [
        "Calcification of falx cerebri"
      ],
      "supporting_source_node_names": [
        "Calcification of Falx Cerebri"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010651" } }));
