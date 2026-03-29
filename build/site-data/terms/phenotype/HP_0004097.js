window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004097"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004097",
  "term_label": "Deviation of finger",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "HP:0004097",
      "term_label": "Deviation of finger",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001234",
      "best_source_term_label": "Hitchhiker thumb",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001234"
      ],
      "supporting_source_term_labels": [
        "Hitchhiker thumb"
      ],
      "supporting_source_node_names": [
        "Hitchhiker Thumb"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diastrophic Dysplasia",
      "disease_term_id": "MONDO:0009107",
      "source_file": "Diastrophic_Dysplasia.yaml",
      "term_id": "HP:0004097",
      "term_label": "Deviation of finger",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001234",
      "best_source_term_label": "Hitchhiker thumb",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001234"
      ],
      "supporting_source_term_labels": [
        "Hitchhiker thumb"
      ],
      "supporting_source_node_names": [
        "Hitchhiker Thumb"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004097" } }));
