window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000961"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000961",
  "term_label": "Cyanosis",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.579777,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "HP:0000961",
      "term_label": "Cyanosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000961",
      "best_source_term_label": "Cyanosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000961"
      ],
      "supporting_source_term_labels": [
        "Cyanosis"
      ],
      "supporting_source_node_names": [
        "Cyanosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "HP:0000961",
      "term_label": "Cyanosis",
      "score": 0.555556,
      "direct_score": 0.555556,
      "propagated_score": 0.555556,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000961",
      "best_source_term_label": "Cyanosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000961"
      ],
      "supporting_source_term_labels": [
        "Cyanosis"
      ],
      "supporting_source_node_names": [
        "Cyanosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "HP:0000961",
      "term_label": "Cyanosis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001063",
      "best_source_term_label": "Acrocyanosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001063"
      ],
      "supporting_source_term_labels": [
        "Acrocyanosis"
      ],
      "supporting_source_node_names": [
        "Acrocyanosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "HP:0000961",
      "term_label": "Cyanosis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001063",
      "best_source_term_label": "Acrocyanosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001063"
      ],
      "supporting_source_term_labels": [
        "Acrocyanosis"
      ],
      "supporting_source_node_names": [
        "Acrocyanosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000961" } }));
