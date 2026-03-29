window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031547"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031547",
  "term_label": "Abnormal QT interval",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.51973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Methylmalonic Acidemia",
      "disease_term_id": "MONDO:0002012",
      "source_file": "Methylmalonic_Acidemia.yaml",
      "term_id": "HP:0031547",
      "term_label": "Abnormal QT interval",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001657",
      "best_source_term_label": "Prolonged QT interval",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001657"
      ],
      "supporting_source_term_labels": [
        "Prolonged QT interval"
      ],
      "supporting_source_node_names": [
        "Prolonged QT interval"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Propionic Acidemia",
      "disease_term_id": "MONDO:0011628",
      "source_file": "Propionic_Acidemia.yaml",
      "term_id": "HP:0031547",
      "term_label": "Abnormal QT interval",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001657",
      "best_source_term_label": "Prolonged QT interval",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001657"
      ],
      "supporting_source_term_labels": [
        "Prolonged QT interval"
      ],
      "supporting_source_node_names": [
        "Prolonged QT interval"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "HP:0031547",
      "term_label": "Abnormal QT interval",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005184",
      "best_source_term_label": "Prolonged QTc interval",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005184"
      ],
      "supporting_source_term_labels": [
        "Prolonged QTc interval"
      ],
      "supporting_source_node_names": [
        "QTc Prolongation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031547" } }));
