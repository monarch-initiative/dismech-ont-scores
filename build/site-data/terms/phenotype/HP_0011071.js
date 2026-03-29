window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011071"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011071",
  "term_label": "Abnormal permanent molar morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "HP:0011071",
      "term_label": "Abnormal permanent molar morphology",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000679",
      "best_source_term_label": "Taurodontia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000679"
      ],
      "supporting_source_term_labels": [
        "Taurodontia"
      ],
      "supporting_source_node_names": [
        "Taurodontia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011071" } }));
