window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002624"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002624",
  "term_label": "Abnormal venous morphology",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.758742,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Menkes Disease",
      "disease_term_id": "MONDO:0010651",
      "source_file": "Menkes_Disease.yaml",
      "term_id": "HP:0002624",
      "term_label": "Abnormal venous morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002624",
      "best_source_term_label": "Abnormal venous morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002624"
      ],
      "supporting_source_term_labels": [
        "Abnormal venous morphology"
      ],
      "supporting_source_node_names": [
        "Internal jugular vein phlebectasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0002624",
      "term_label": "Abnormal venous morphology",
      "score": 0.698748,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012721",
      "best_source_term_label": "Venous malformation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002619",
        "HP:0012721"
      ],
      "supporting_source_term_labels": [
        "Varicose veins",
        "Venous malformation"
      ],
      "supporting_source_node_names": [
        "Varicose veins",
        "Venous malformation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0002624",
      "term_label": "Abnormal venous morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012721",
      "best_source_term_label": "Venous malformation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012721"
      ],
      "supporting_source_term_labels": [
        "Venous malformation"
      ],
      "supporting_source_node_names": [
        "Venous Malformation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002624" } }));
