window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0140645"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0140645",
  "term_label": "neutrophil extracellular trap formation",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.527778,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tuberculosis",
      "disease_term_id": "MONDO:0018076",
      "source_file": "Tuberculosis.yaml",
      "term_id": "GO:0140645",
      "term_label": "neutrophil extracellular trap formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0140645",
      "best_source_term_label": "neutrophil extracellular trap formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0140645"
      ],
      "supporting_source_term_labels": [
        "neutrophil extracellular trap formation"
      ],
      "supporting_source_node_names": [
        "Neutrophil Activation and NETosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Bronchiectasis",
      "disease_term_id": "MONDO:0004822",
      "source_file": "Bronchiectasis.yaml",
      "term_id": "GO:0140645",
      "term_label": "neutrophil extracellular trap formation",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0140645",
      "best_source_term_label": "neutrophil extracellular trap formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0140645"
      ],
      "supporting_source_term_labels": [
        "neutrophil extracellular trap formation"
      ],
      "supporting_source_node_names": [
        "Neutrophil-Driven Inflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "GO:0140645",
      "term_label": "neutrophil extracellular trap formation",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0140645",
      "best_source_term_label": "neutrophil extracellular trap formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0140645"
      ],
      "supporting_source_term_labels": [
        "neutrophil extracellular trap formation"
      ],
      "supporting_source_node_names": [
        "NETosis and Neutrophil Extracellular Trap Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0140645" } }));
