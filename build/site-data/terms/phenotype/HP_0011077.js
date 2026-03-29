window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011077"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011077",
  "term_label": "Abnormality of molar",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2744,
  "mean_score": 0.2744,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "HP:0011077",
      "term_label": "Abnormality of molar",
      "score": 0.2744,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000679",
      "best_source_term_label": "Taurodontia",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011077" } }));
