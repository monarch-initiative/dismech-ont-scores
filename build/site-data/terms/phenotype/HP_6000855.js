window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6000855"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6000855",
  "term_label": "Cold intolerance",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hashimoto's Thyroiditis",
      "disease_term_id": "MONDO:0007699",
      "source_file": "Hashimotos_Thyroiditis.yaml",
      "term_id": "HP:6000855",
      "term_label": "Cold intolerance",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:6000855",
      "best_source_term_label": "Cold intolerance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000855"
      ],
      "supporting_source_term_labels": [
        "Cold intolerance"
      ],
      "supporting_source_node_names": [
        "Cold Intolerance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6000855" } }));
