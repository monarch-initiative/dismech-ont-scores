window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025276"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025276",
  "term_label": "Abnormality of skin adnexa physiology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.355726,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Green Tobacco Sickness",
      "disease_term_id": "",
      "source_file": "Green_Tobacco_Sickness.yaml",
      "term_id": "HP:0025276",
      "term_label": "Abnormality of skin adnexa physiology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000975",
      "best_source_term_label": "Hyperhidrosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000975"
      ],
      "supporting_source_term_labels": [
        "Hyperhidrosis"
      ],
      "supporting_source_node_names": [
        "Diaphoresis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pheochromocytoma and Paraganglioma",
      "disease_term_id": "MONDO:0035540",
      "source_file": "Pheochromocytoma_Paraganglioma.yaml",
      "term_id": "HP:0025276",
      "term_label": "Abnormality of skin adnexa physiology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000975",
      "best_source_term_label": "Hyperhidrosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000975"
      ],
      "supporting_source_term_labels": [
        "Hyperhidrosis"
      ],
      "supporting_source_node_names": [
        "Diaphoresis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "HP:0025276",
      "term_label": "Abnormality of skin adnexa physiology",
      "score": 0.25871,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000975",
      "best_source_term_label": "Hyperhidrosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000975"
      ],
      "supporting_source_term_labels": [
        "Hyperhidrosis"
      ],
      "supporting_source_node_names": [
        "Sweating"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025276" } }));
