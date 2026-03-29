window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006482"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006482",
  "term_label": "Abnormal dental morphology",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.868091,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "HP:0006482",
      "term_label": "Abnormal dental morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0006482",
      "best_source_term_label": "Abnormal dental morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006482"
      ],
      "supporting_source_term_labels": [
        "Abnormal dental morphology"
      ],
      "supporting_source_node_names": [
        "Dental Anomalies"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Coffin-Siris syndrome",
      "disease_term_id": "MONDO:0015452",
      "source_file": "Coffin_Siris_Syndrome.yaml",
      "term_id": "HP:0006482",
      "term_label": "Abnormal dental morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0006482",
      "best_source_term_label": "Abnormal dental morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006482"
      ],
      "supporting_source_term_labels": [
        "Abnormal dental morphology"
      ],
      "supporting_source_node_names": [
        "Dental anomalies"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "HP:0006482",
      "term_label": "Abnormal dental morphology",
      "score": 0.604273,
      "direct_score": 0.0,
      "propagated_score": 0.73248,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0006486",
      "best_source_term_label": "Abnormal dental root morphology",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000679",
        "HP:0006486"
      ],
      "supporting_source_term_labels": [
        "Abnormal dental root morphology",
        "Taurodontia"
      ],
      "supporting_source_node_names": [
        "Abnormal dental root morphology",
        "Taurodontia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006482" } }));
