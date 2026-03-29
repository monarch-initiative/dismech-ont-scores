window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002611"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002611",
  "term_label": "Cholestatic liver disease",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "HP:0002611",
      "term_label": "Cholestatic liver disease",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0006566",
      "best_source_term_label": "Neonatal cholestatic liver disease",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006566"
      ],
      "supporting_source_term_labels": [
        "Neonatal cholestatic liver disease"
      ],
      "supporting_source_node_names": [
        "Neonatal cholestasis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "HP:0002611",
      "term_label": "Cholestatic liver disease",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0006566",
      "best_source_term_label": "Neonatal cholestatic liver disease",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006566"
      ],
      "supporting_source_term_labels": [
        "Neonatal cholestatic liver disease"
      ],
      "supporting_source_node_names": [
        "Neonatal Cholestasis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002611" } }));
