window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001911"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001911",
  "term_label": "Abnormal granulocyte morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.282964,
  "mean_score": 0.282964,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "HP:0001911",
      "term_label": "Abnormal granulocyte morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0031807",
      "best_source_term_label": "Increased total basophil count",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031807"
      ],
      "supporting_source_term_labels": [
        "Increased total basophil count"
      ],
      "supporting_source_node_names": [
        "Basophilia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dientamoebiasis",
      "disease_term_id": "MONDO:0024608",
      "source_file": "Dientamoebiasis.yaml",
      "term_id": "HP:0001911",
      "term_label": "Abnormal granulocyte morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001880",
      "best_source_term_label": "Increased total eosinophil count",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001880"
      ],
      "supporting_source_term_labels": [
        "Increased total eosinophil count"
      ],
      "supporting_source_node_names": [
        "Peripheral eosinophilia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "HP:0001911",
      "term_label": "Abnormal granulocyte morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001875",
      "best_source_term_label": "Decreased total neutrophil count",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001875"
      ],
      "supporting_source_term_labels": [
        "Decreased total neutrophil count"
      ],
      "supporting_source_node_names": [
        "Neutropenia (GSD Ib)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001911" } }));
