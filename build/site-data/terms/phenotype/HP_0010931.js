window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010931"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010931",
  "term_label": "Abnormal blood sodium concentration",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.398526,
  "mean_score": 0.358673,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0010931",
      "term_label": "Abnormal blood sodium concentration",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002902",
      "best_source_term_label": "Hyponatremia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "HP:0010931",
      "term_label": "Abnormal blood sodium concentration",
      "score": 0.318821,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002902",
      "best_source_term_label": "Hyponatremia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002902"
      ],
      "supporting_source_term_labels": [
        "Hyponatremia"
      ],
      "supporting_source_node_names": [
        "Hyponatremia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010931" } }));
