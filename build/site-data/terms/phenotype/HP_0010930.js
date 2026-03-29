window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010930"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010930",
  "term_label": "Abnormal blood monovalent inorganic cation concentration",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.279998,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "HP:0010930",
      "term_label": "Abnormal blood monovalent inorganic cation concentration",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002153",
      "best_source_term_label": "Hyperkalemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002153"
      ],
      "supporting_source_term_labels": [
        "Hyperkalemia"
      ],
      "supporting_source_node_names": [
        "Hyperkalemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "HP:0010930",
      "term_label": "Abnormal blood monovalent inorganic cation concentration",
      "score": 0.341899,
      "direct_score": 0.0,
      "propagated_score": 0.438819,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002902",
      "best_source_term_label": "Hyponatremia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002153",
        "HP:0002902"
      ],
      "supporting_source_term_labels": [
        "Hyperkalemia",
        "Hyponatremia"
      ],
      "supporting_source_node_names": [
        "Hyperkalemia",
        "Hyponatremia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0010930",
      "term_label": "Abnormal blood monovalent inorganic cation concentration",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002902",
      "best_source_term_label": "Hyponatremia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002902"
      ],
      "supporting_source_term_labels": [
        "Hyponatremia"
      ],
      "supporting_source_node_names": [
        "Hyponatremic Dehydration"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0010930",
      "term_label": "Abnormal blood monovalent inorganic cation concentration",
      "score": 0.151981,
      "direct_score": 0.0,
      "propagated_score": 0.195064,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002900",
      "best_source_term_label": "Hypokalemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002900"
      ],
      "supporting_source_term_labels": [
        "Hypokalemia"
      ],
      "supporting_source_node_names": [
        "Hypokalemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010930" } }));
