window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012415"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012415",
  "term_label": "Abnormal blood gas level",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.560726,
  "mean_score": 0.498307,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "HP:0012415",
      "term_label": "Abnormal blood gas level",
      "score": 0.560726,
      "direct_score": 0.0,
      "propagated_score": 0.630336,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012418",
      "best_source_term_label": "Hypoxemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012416",
        "HP:0012418"
      ],
      "supporting_source_term_labels": [
        "Hypercapnia",
        "Hypoxemia"
      ],
      "supporting_source_node_names": [
        "Hypercapnia",
        "Hypoxemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "HP:0012415",
      "term_label": "Abnormal blood gas level",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012418",
      "best_source_term_label": "Hypoxemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012418"
      ],
      "supporting_source_term_labels": [
        "Hypoxemia"
      ],
      "supporting_source_node_names": [
        "Hypoxemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012415" } }));
