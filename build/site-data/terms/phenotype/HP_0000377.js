window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000377"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000377",
  "term_label": "Abnormal pinna morphology",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.731792,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Crouzon Syndrome",
      "disease_term_id": "MONDO:0007405",
      "source_file": "Crouzon_Syndrome.yaml",
      "term_id": "HP:0000377",
      "term_label": "Abnormal pinna morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000377",
      "best_source_term_label": "Abnormal pinna morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000377"
      ],
      "supporting_source_term_labels": [
        "Abnormal pinna morphology"
      ],
      "supporting_source_node_names": [
        "External Ear Abnormality"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000377",
      "term_label": "Abnormal pinna morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000377",
      "best_source_term_label": "Abnormal pinna morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000377"
      ],
      "supporting_source_term_labels": [
        "Abnormal pinna morphology"
      ],
      "supporting_source_node_names": [
        "Abnormal Pinna Morphology"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fragile X Syndrome",
      "disease_term_id": "MONDO:0010383",
      "source_file": "Fragile_X_Syndrome.yaml",
      "term_id": "HP:0000377",
      "term_label": "Abnormal pinna morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000400",
      "best_source_term_label": "Macrotia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000400"
      ],
      "supporting_source_term_labels": [
        "Macrotia"
      ],
      "supporting_source_node_names": [
        "Large Ears"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "HP:0000377",
      "term_label": "Abnormal pinna morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000369",
      "best_source_term_label": "Low-set ears",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000369"
      ],
      "supporting_source_term_labels": [
        "Low-set ears"
      ],
      "supporting_source_node_names": [
        "Low-set Ears"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000377" } }));
