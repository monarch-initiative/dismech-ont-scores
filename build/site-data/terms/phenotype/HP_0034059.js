window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034059"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034059",
  "term_label": "Abnormal fetal physiology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.973,
  "mean_score": 0.973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "HP:0034059",
      "term_label": "Abnormal fetal physiology",
      "score": 0.973,
      "direct_score": 0.0,
      "propagated_score": 0.973,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0031110",
      "best_source_term_label": "Twin-to-twin transfusion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025716",
        "HP:0030753",
        "HP:0031110"
      ],
      "supporting_source_term_labels": [
        "Fetal anemia",
        "Intrauterine fetal demise of one twin after midgestation",
        "Twin-to-twin transfusion"
      ],
      "supporting_source_node_names": [
        "Fetal anemia (donor)",
        "Intrauterine fetal demise of one twin",
        "Twin-to-twin transfusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034059" } }));
