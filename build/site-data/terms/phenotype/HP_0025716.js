window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025716"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025716",
  "term_label": "Fetal anemia",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "HP:0025716",
      "term_label": "Fetal anemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0025716",
      "best_source_term_label": "Fetal anemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025716"
      ],
      "supporting_source_term_labels": [
        "Fetal anemia"
      ],
      "supporting_source_node_names": [
        "Fetal anemia (donor)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025716" } }));
