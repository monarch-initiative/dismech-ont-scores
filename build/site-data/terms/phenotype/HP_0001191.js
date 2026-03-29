window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001191"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001191",
  "term_label": "Abnormal carpal morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.50449,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Muenke Syndrome",
      "disease_term_id": "MONDO:0011274",
      "source_file": "Muenke_Syndrome.yaml",
      "term_id": "HP:0001191",
      "term_label": "Abnormal carpal morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009702"
      ],
      "supporting_source_term_labels": [
        "Carpal synostosis"
      ],
      "supporting_source_node_names": [
        "Carpal/Tarsal Fusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Synostoses Syndrome",
      "disease_term_id": "MONDO:0017923",
      "source_file": "Multiple_Synostoses_Syndrome.yaml",
      "term_id": "HP:0001191",
      "term_label": "Abnormal carpal morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009702"
      ],
      "supporting_source_term_labels": [
        "Carpal synostosis"
      ],
      "supporting_source_node_names": [
        "Carpal and Tarsal Fusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Spondylocarpotarsal Synostosis Syndrome",
      "disease_term_id": "MONDO:0010094",
      "source_file": "Spondylocarpotarsal_Synostosis_Syndrome.yaml",
      "term_id": "HP:0001191",
      "term_label": "Abnormal carpal morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009702"
      ],
      "supporting_source_term_labels": [
        "Carpal synostosis"
      ],
      "supporting_source_node_names": [
        "Carpal Synostosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "HP:0001191",
      "term_label": "Abnormal carpal morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006067",
      "best_source_term_label": "Multiple carpal ossification centers",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006067"
      ],
      "supporting_source_term_labels": [
        "Multiple carpal ossification centers"
      ],
      "supporting_source_node_names": [
        "Multiple Carpal Ossification Centers"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001191" } }));
