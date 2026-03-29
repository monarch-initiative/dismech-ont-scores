window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0032076"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0032076",
  "term_label": "Abnormal male urethral meatus morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0032076",
      "term_label": "Abnormal male urethral meatus morphology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000047",
      "best_source_term_label": "Hypospadias",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000047"
      ],
      "supporting_source_term_labels": [
        "Hypospadias"
      ],
      "supporting_source_node_names": [
        "Hypospadias"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0032076",
      "term_label": "Abnormal male urethral meatus morphology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000047",
      "best_source_term_label": "Hypospadias",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000047"
      ],
      "supporting_source_term_labels": [
        "Hypospadias"
      ],
      "supporting_source_node_names": [
        "Hypospadias"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0032076" } }));
