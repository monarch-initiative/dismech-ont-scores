window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010568"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010568",
  "term_label": "Hamartoma of the eye",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0010568",
      "term_label": "Hamartoma of the eye",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009737",
      "best_source_term_label": "Lisch nodules",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009737"
      ],
      "supporting_source_term_labels": [
        "Lisch nodules"
      ],
      "supporting_source_node_names": [
        "Lisch Nodules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0010568",
      "term_label": "Hamartoma of the eye",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009711",
      "best_source_term_label": "Retinal capillary hemangioma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009711"
      ],
      "supporting_source_term_labels": [
        "Retinal capillary hemangioma"
      ],
      "supporting_source_node_names": [
        "Retinal Hemangioblastoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010568" } }));
