window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002778"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002778",
  "term_label": "Abnormal tracheal morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.51973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type III",
      "disease_term_id": "MONDO:0007168",
      "source_file": "Atelosteogenesis_Type_III.yaml",
      "term_id": "HP:0002778",
      "term_label": "Abnormal tracheal morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002779",
      "best_source_term_label": "Tracheomalacia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002779"
      ],
      "supporting_source_term_labels": [
        "Tracheomalacia"
      ],
      "supporting_source_node_names": [
        "Tracheomalacia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002778",
      "term_label": "Abnormal tracheal morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002575",
      "best_source_term_label": "Tracheoesophageal fistula",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002575"
      ],
      "supporting_source_term_labels": [
        "Tracheoesophageal fistula"
      ],
      "supporting_source_node_names": [
        "Tracheoesophageal Fistula"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "HP:0002778",
      "term_label": "Abnormal tracheal morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002786",
      "best_source_term_label": "Tracheobronchomalacia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002786"
      ],
      "supporting_source_term_labels": [
        "Tracheobronchomalacia"
      ],
      "supporting_source_node_names": [
        "Tracheobronchomalacia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002778" } }));
