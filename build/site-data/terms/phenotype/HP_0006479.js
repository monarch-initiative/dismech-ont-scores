window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006479"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006479",
  "term_label": "Abnormal dental pulp morphology",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.912,
  "mean_score": 0.912,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "HP:0006479",
      "term_label": "Abnormal dental pulp morphology",
      "score": 0.912,
      "direct_score": 0.8,
      "propagated_score": 0.912,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0006479",
      "best_source_term_label": "Abnormal dental pulp morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000679",
        "HP:0006479"
      ],
      "supporting_source_term_labels": [
        "Abnormal dental pulp morphology",
        "Taurodontia"
      ],
      "supporting_source_node_names": [
        "Abnormal dental pulp morphology"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006479" } }));
