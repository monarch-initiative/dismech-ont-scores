window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000551"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000551",
  "term_label": "Color vision defect",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0000551",
      "term_label": "Color vision defect",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000551",
      "best_source_term_label": "Color vision defect",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000551"
      ],
      "supporting_source_term_labels": [
        "Color vision defect"
      ],
      "supporting_source_node_names": [
        "Color vision defect"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Age-Related Macular Degeneration",
      "disease_term_id": "MONDO:0005150",
      "source_file": "Age_Related_Macular_Degeneration.yaml",
      "term_id": "HP:0000551",
      "term_label": "Color vision defect",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000551",
      "best_source_term_label": "Color vision defect",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000551"
      ],
      "supporting_source_term_labels": [
        "Color vision defect"
      ],
      "supporting_source_node_names": [
        "Central Vision Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000551" } }));
