window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002948"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002948",
  "term_label": "Vertebral fusion",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.859159,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Synostoses Syndrome",
      "disease_term_id": "MONDO:0017923",
      "source_file": "Multiple_Synostoses_Syndrome.yaml",
      "term_id": "HP:0002948",
      "term_label": "Vertebral fusion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002948",
      "best_source_term_label": "Vertebral fusion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002948"
      ],
      "supporting_source_term_labels": [
        "Vertebral fusion"
      ],
      "supporting_source_node_names": [
        "Vertebral Fusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Spondylocarpotarsal Synostosis Syndrome",
      "disease_term_id": "MONDO:0010094",
      "source_file": "Spondylocarpotarsal_Synostosis_Syndrome.yaml",
      "term_id": "HP:0002948",
      "term_label": "Vertebral fusion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002948",
      "best_source_term_label": "Vertebral fusion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002948"
      ],
      "supporting_source_term_labels": [
        "Vertebral fusion"
      ],
      "supporting_source_node_names": [
        "Vertebral Fusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002948",
      "term_label": "Vertebral fusion",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002949",
      "best_source_term_label": "Fused cervical vertebrae",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002949"
      ],
      "supporting_source_term_labels": [
        "Fused cervical vertebrae"
      ],
      "supporting_source_node_names": [
        "Fused Cervical Vertebrae"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002948" } }));
