window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031105"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031105",
  "term_label": "Abnormal uterus morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.51973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0031105",
      "term_label": "Abnormal uterus morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000813",
      "best_source_term_label": "Bicornuate uterus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000813"
      ],
      "supporting_source_term_labels": [
        "Bicornuate uterus"
      ],
      "supporting_source_node_names": [
        "Bicornuate Uterus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0031105",
      "term_label": "Abnormal uterus morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000813",
      "best_source_term_label": "Bicornuate uterus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000813"
      ],
      "supporting_source_term_labels": [
        "Bicornuate uterus"
      ],
      "supporting_source_node_names": [
        "Bicornuate Uterus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cowden Syndrome",
      "disease_term_id": "MONDO:0016063",
      "source_file": "Cowden_Syndrome.yaml",
      "term_id": "HP:0031105",
      "term_label": "Abnormal uterus morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012114",
      "best_source_term_label": "Endometrial carcinoma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012114"
      ],
      "supporting_source_term_labels": [
        "Endometrial carcinoma"
      ],
      "supporting_source_node_names": [
        "Uterine Cancer Risk"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031105" } }));
