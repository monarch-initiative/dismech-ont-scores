window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000630"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000630",
  "term_label": "Abnormal retinal arterial/arteriolar morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Tay-Sachs Disease",
      "disease_term_id": "MONDO:0010100",
      "source_file": "Tay-Sachs_Disease.yaml",
      "term_id": "HP:0000630",
      "term_label": "Abnormal retinal arterial/arteriolar morphology",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0010729",
      "best_source_term_label": "Cherry red spot of the macula",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010729"
      ],
      "supporting_source_term_labels": [
        "Cherry red spot of the macula"
      ],
      "supporting_source_node_names": [
        "Cherry-Red Spot"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000630" } }));
