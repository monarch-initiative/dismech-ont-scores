window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001912"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001912",
  "term_label": "Abnormal basophil morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "HP:0001912",
      "term_label": "Abnormal basophil morphology",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0031807",
      "best_source_term_label": "Increased total basophil count",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001912" } }));
