window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003019"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003019",
  "term_label": "Abnormality of the wrist",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.267243,
  "mean_score": 0.2472,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Muenke Syndrome",
      "disease_term_id": "MONDO:0011274",
      "source_file": "Muenke_Syndrome.yaml",
      "term_id": "HP:0003019",
      "term_label": "Abnormality of the wrist",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "HP:0003019",
      "term_label": "Abnormality of the wrist",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "HP:0003019",
      "term_label": "Abnormality of the wrist",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009702",
      "best_source_term_label": "Carpal synostosis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "HP:0003019",
      "term_label": "Abnormality of the wrist",
      "score": 0.18707,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006067",
      "best_source_term_label": "Multiple carpal ossification centers",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003019" } }));
