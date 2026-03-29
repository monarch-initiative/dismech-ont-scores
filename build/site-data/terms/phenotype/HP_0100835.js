window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100835"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100835",
  "term_label": "Benign neoplasm of the central nervous system",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.540895,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0100835",
      "term_label": "Benign neoplasm of the central nervous system",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010797",
      "best_source_term_label": "Hemangioblastoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009711",
        "HP:0010797"
      ],
      "supporting_source_term_labels": [
        "Hemangioblastoma",
        "Retinal capillary hemangioma"
      ],
      "supporting_source_node_names": [
        "Cerebellar Hemangioblastoma",
        "Retinal Hemangioblastoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0100835",
      "term_label": "Benign neoplasm of the central nervous system",
      "score": 0.576482,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009717",
      "best_source_term_label": "Cortical tubers",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009716",
        "HP:0009717"
      ],
      "supporting_source_term_labels": [
        "Cortical tubers",
        "Subependymal nodules"
      ],
      "supporting_source_node_names": [
        "Cortical Tubers",
        "Subependymal Nodules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "HP:0100835",
      "term_label": "Benign neoplasm of the central nervous system",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
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
      "disorder_name": "Pallister-Hall Syndrome",
      "disease_term_id": "MONDO:0007804",
      "source_file": "Pallister-Hall_Syndrome.yaml",
      "term_id": "HP:0100835",
      "term_label": "Benign neoplasm of the central nervous system",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002444",
      "best_source_term_label": "Hypothalamic hamartoma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002444"
      ],
      "supporting_source_term_labels": [
        "Hypothalamic hamartoma"
      ],
      "supporting_source_node_names": [
        "Hypothalamic Hamartoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100835" } }));
