window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008053"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008053",
  "term_label": "Aplasia/Hypoplasia of the iris",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "HP:0008053",
      "term_label": "Aplasia/Hypoplasia of the iris",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000526",
      "best_source_term_label": "Aniridia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000526"
      ],
      "supporting_source_term_labels": [
        "Aniridia"
      ],
      "supporting_source_node_names": [
        "Aniridia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008053" } }));
