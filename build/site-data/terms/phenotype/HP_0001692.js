window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001692"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001692",
  "term_label": "Atrial arrhythmia",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.481232,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "HP:0001692",
      "term_label": "Atrial arrhythmia",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005110"
      ],
      "supporting_source_term_labels": [
        "Atrial fibrillation"
      ],
      "supporting_source_node_names": [
        "Atrial fibrillation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "HP:0001692",
      "term_label": "Atrial arrhythmia",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005110"
      ],
      "supporting_source_term_labels": [
        "Atrial fibrillation"
      ],
      "supporting_source_node_names": [
        "Atrial fibrillation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "HP:0001692",
      "term_label": "Atrial arrhythmia",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005110"
      ],
      "supporting_source_term_labels": [
        "Atrial fibrillation"
      ],
      "supporting_source_node_names": [
        "Atrial Fibrillation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001692" } }));
