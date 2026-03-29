window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0045005"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0045005",
  "term_label": "Neural tube defect",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.394047,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0045005",
      "term_label": "Neural tube defect",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010301",
      "best_source_term_label": "Spinal dysraphism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002414",
        "HP:0010301"
      ],
      "supporting_source_term_labels": [
        "Spina bifida",
        "Spinal dysraphism"
      ],
      "supporting_source_node_names": [
        "Spina Bifida",
        "Spinal Anomalies"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kummell Disease",
      "disease_term_id": "MONDO:0003940",
      "source_file": "Kummell_Disease.yaml",
      "term_id": "HP:0045005",
      "term_label": "Neural tube defect",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002196",
      "best_source_term_label": "Myelopathy",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002196"
      ],
      "supporting_source_term_labels": [
        "Myelopathy"
      ],
      "supporting_source_node_names": [
        "Neurological deficit"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Meckel Syndrome",
      "disease_term_id": "MONDO:0018921",
      "source_file": "Meckel_Syndrome.yaml",
      "term_id": "HP:0045005",
      "term_label": "Neural tube defect",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002085",
      "best_source_term_label": "Occipital encephalocele",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002085"
      ],
      "supporting_source_term_labels": [
        "Occipital encephalocele"
      ],
      "supporting_source_node_names": [
        "Occipital encephalocele"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SADDAN",
      "disease_term_id": "MONDO:0014658",
      "source_file": "SADDAN.yaml",
      "term_id": "HP:0045005",
      "term_label": "Neural tube defect",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002324",
      "best_source_term_label": "Hydranencephaly",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002324"
      ],
      "supporting_source_term_labels": [
        "Hydranencephaly"
      ],
      "supporting_source_node_names": [
        "Hydranencephaly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0045005" } }));
