window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000525"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000525",
  "term_label": "Abnormality iris morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.404234,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0000525",
      "term_label": "Abnormality iris morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0009737",
      "best_source_term_label": "Lisch nodules",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009737"
      ],
      "supporting_source_term_labels": [
        "Lisch nodules"
      ],
      "supporting_source_node_names": [
        "Lisch Nodules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Retinoblastoma",
      "disease_term_id": "MONDO:0008380",
      "source_file": "Retinoblastoma.yaml",
      "term_id": "HP:0000525",
      "term_label": "Abnormality iris morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000555",
      "best_source_term_label": "Leukocoria",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000555"
      ],
      "supporting_source_term_labels": [
        "Leukocoria"
      ],
      "supporting_source_node_names": [
        "Leukocoria"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "HP:0000525",
      "term_label": "Abnormality iris morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000526",
      "best_source_term_label": "Aniridia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000526"
      ],
      "supporting_source_term_labels": [
        "Aniridia"
      ],
      "supporting_source_node_names": [
        "Aniridia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000525" } }));
