window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001278"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001278",
  "term_label": "Orthostatic hypotension",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome",
      "disease_term_id": "MONDO:0005404",
      "source_file": "Myalgic_Encephalomyelitis_Chronic_Fatigue_Syndrome.yaml",
      "term_id": "HP:0001278",
      "term_label": "Orthostatic hypotension",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001278",
      "best_source_term_label": "Orthostatic hypotension",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001278"
      ],
      "supporting_source_term_labels": [
        "Orthostatic hypotension"
      ],
      "supporting_source_node_names": [
        "Orthostatic Intolerance"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "HP:0001278",
      "term_label": "Orthostatic hypotension",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001278",
      "best_source_term_label": "Orthostatic hypotension",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001278"
      ],
      "supporting_source_term_labels": [
        "Orthostatic hypotension"
      ],
      "supporting_source_node_names": [
        "Orthostatic Hypotension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001278" } }));
