window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000356"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000356",
  "term_label": "Abnormality of the outer ear",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.718339,
  "mean_score": 0.478188,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000356",
      "term_label": "Abnormality of the outer ear",
      "score": 0.718339,
      "direct_score": 0.0,
      "propagated_score": 0.92197,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000377",
      "best_source_term_label": "Abnormal pinna morphology",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000377",
        "HP:0000402",
        "HP:0000413"
      ],
      "supporting_source_term_labels": [
        "Abnormal pinna morphology",
        "Atresia of the external auditory canal",
        "Stenosis of the external auditory canal"
      ],
      "supporting_source_node_names": [
        "Abnormal Pinna Morphology",
        "External Auditory Canal Atresia",
        "External Auditory Canal Stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Crouzon Syndrome",
      "disease_term_id": "MONDO:0007405",
      "source_file": "Crouzon_Syndrome.yaml",
      "term_id": "HP:0000356",
      "term_label": "Abnormality of the outer ear",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000377",
      "best_source_term_label": "Abnormal pinna morphology",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Fragile X Syndrome",
      "disease_term_id": "MONDO:0010383",
      "source_file": "Fragile_X_Syndrome.yaml",
      "term_id": "HP:0000356",
      "term_label": "Abnormality of the outer ear",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000400",
      "best_source_term_label": "Macrotia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0000356",
      "term_label": "Abnormality of the outer ear",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000369",
      "best_source_term_label": "Low-set ears",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000356" } }));
