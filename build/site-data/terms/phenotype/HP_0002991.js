window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002991"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002991",
  "term_label": "Abnormal fibula morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "SADDAN",
      "disease_term_id": "MONDO:0014658",
      "source_file": "SADDAN.yaml",
      "term_id": "HP:0002991",
      "term_label": "Abnormal fibula morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0010502",
      "best_source_term_label": "Fibular bowing",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010502"
      ],
      "supporting_source_term_labels": [
        "Fibular bowing"
      ],
      "supporting_source_node_names": [
        "Fibular bowing"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type I",
      "disease_term_id": "MONDO:0007167",
      "source_file": "Atelosteogenesis_Type_I.yaml",
      "term_id": "HP:0002991",
      "term_label": "Abnormal fibula morphology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002990",
      "best_source_term_label": "Fibular aplasia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002990"
      ],
      "supporting_source_term_labels": [
        "Fibular aplasia"
      ],
      "supporting_source_node_names": [
        "Fibular Aplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002991" } }));
