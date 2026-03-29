window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011042"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011042",
  "term_label": "Abnormal circulating potassium concentration",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.367678,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "HP:0011042",
      "term_label": "Abnormal circulating potassium concentration",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002153",
      "best_source_term_label": "Hyperkalemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:0011042",
      "term_label": "Abnormal circulating potassium concentration",
      "score": 0.295669,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002153",
      "best_source_term_label": "Hyperkalemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0011042",
      "term_label": "Abnormal circulating potassium concentration",
      "score": 0.229888,
      "direct_score": 0.0,
      "propagated_score": 0.278662,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002900",
      "best_source_term_label": "Hypokalemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011042" } }));
