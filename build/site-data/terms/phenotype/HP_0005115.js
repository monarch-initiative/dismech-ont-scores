window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0005115"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0005115",
  "term_label": "Supraventricular arrhythmia",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.48861,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Costello Syndrome",
      "disease_term_id": "MONDO:0009026",
      "source_file": "Costello_Syndrome.yaml",
      "term_id": "HP:0005115",
      "term_label": "Supraventricular arrhythmia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0005115",
      "best_source_term_label": "Supraventricular arrhythmia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005115"
      ],
      "supporting_source_term_labels": [
        "Supraventricular arrhythmia"
      ],
      "supporting_source_node_names": [
        "Multifocal Atrial Tachycardia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "HP:0005115",
      "term_label": "Supraventricular arrhythmia",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0005115",
      "term_label": "Supraventricular arrhythmia",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0005115",
      "term_label": "Supraventricular arrhythmia",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005110",
      "best_source_term_label": "Atrial fibrillation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0005115" } }));
