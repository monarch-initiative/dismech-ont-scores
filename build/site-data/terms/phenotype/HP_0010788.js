window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010788"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010788",
  "term_label": "Testicular neoplasm",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "HP:0010788",
      "term_label": "Testicular neoplasm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0010788",
      "best_source_term_label": "Testicular neoplasm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010788"
      ],
      "supporting_source_term_labels": [
        "Testicular neoplasm"
      ],
      "supporting_source_node_names": [
        "Testicular Mass"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010788" } }));
