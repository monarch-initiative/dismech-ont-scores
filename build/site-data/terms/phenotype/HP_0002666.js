window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002666"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002666",
  "term_label": "Pheochromocytoma",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0002666",
      "term_label": "Pheochromocytoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002666",
      "best_source_term_label": "Pheochromocytoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002666"
      ],
      "supporting_source_term_labels": [
        "Pheochromocytoma"
      ],
      "supporting_source_node_names": [
        "Pheochromocytoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0002666",
      "term_label": "Pheochromocytoma",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002666",
      "best_source_term_label": "Pheochromocytoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002666"
      ],
      "supporting_source_term_labels": [
        "Pheochromocytoma"
      ],
      "supporting_source_node_names": [
        "Pheochromocytoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002666" } }));
