window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002931"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002931",
  "term_label": "response to ischemia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.512,
  "mean_score": 0.367111,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "GO:0002931",
      "term_label": "response to ischemia",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002931",
      "best_source_term_label": "response to ischemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002931"
      ],
      "supporting_source_term_labels": [
        "response to ischemia"
      ],
      "supporting_source_node_names": [
        "Chronic Organ Damage"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "GO:0002931",
      "term_label": "response to ischemia",
      "score": 0.222222,
      "direct_score": 0.222222,
      "propagated_score": 0.222222,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002931",
      "best_source_term_label": "response to ischemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002931"
      ],
      "supporting_source_term_labels": [
        "response to ischemia"
      ],
      "supporting_source_node_names": [
        "Ischemic Tubular Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002931" } }));
