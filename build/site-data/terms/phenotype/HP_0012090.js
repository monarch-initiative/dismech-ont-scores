window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012090"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012090",
  "term_label": "Abnormal pancreas morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.635226,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pancreatic Mucinous Cystadenoma",
      "disease_term_id": "MONDO:0018523",
      "source_file": "Pancreatic_Mucinous_Cystadenoma.yaml",
      "term_id": "HP:0012090",
      "term_label": "Abnormal pancreas morphology",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:6000409",
      "best_source_term_label": "Pancreatic mass",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001737",
        "HP:6000409"
      ],
      "supporting_source_term_labels": [
        "Pancreatic cysts",
        "Pancreatic mass"
      ],
      "supporting_source_node_names": [
        "Pancreatic Cysts",
        "Pancreatic Mass"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0012090",
      "term_label": "Abnormal pancreas morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001734",
      "best_source_term_label": "Annular pancreas",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001734"
      ],
      "supporting_source_term_labels": [
        "Annular pancreas"
      ],
      "supporting_source_node_names": [
        "Annular Pancreas"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0012090",
      "term_label": "Abnormal pancreas morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001737",
      "best_source_term_label": "Pancreatic cysts",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001737"
      ],
      "supporting_source_term_labels": [
        "Pancreatic cysts"
      ],
      "supporting_source_node_names": [
        "Pancreatic Cysts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012090" } }));
