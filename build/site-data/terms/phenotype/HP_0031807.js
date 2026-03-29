window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031807"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031807",
  "term_label": "Increased total basophil count",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "HP:0031807",
      "term_label": "Increased total basophil count",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0031807",
      "best_source_term_label": "Increased total basophil count",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031807"
      ],
      "supporting_source_term_labels": [
        "Increased total basophil count"
      ],
      "supporting_source_node_names": [
        "Basophilia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031807" } }));
