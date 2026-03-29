window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072378"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072378",
  "term_label": "blood coagulation, fibrin clot formation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemophilia A",
      "disease_term_id": "MONDO:0010602",
      "source_file": "Hemophilia_A.yaml",
      "term_id": "GO:0072378",
      "term_label": "blood coagulation, fibrin clot formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0072378",
      "best_source_term_label": "blood coagulation, fibrin clot formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072378"
      ],
      "supporting_source_term_labels": [
        "blood coagulation, fibrin clot formation"
      ],
      "supporting_source_node_names": [
        "Impaired Thrombin Generation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072378" } }));
