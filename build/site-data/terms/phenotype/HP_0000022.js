window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000022"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000022",
  "term_label": "Abnormal male internal genitalia morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1715,
  "mean_score": 0.1715,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "HP:0000022",
      "term_label": "Abnormal male internal genitalia morphology",
      "score": 0.1715,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0012125",
      "best_source_term_label": "Prostate cancer",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012125"
      ],
      "supporting_source_term_labels": [
        "Prostate cancer"
      ],
      "supporting_source_node_names": [
        "Prostate Cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000022" } }));
