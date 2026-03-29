window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002437"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002437",
  "term_label": "inflammatory response to antigenic stimulus",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.317354,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "GO:0002437",
      "term_label": "inflammatory response to antigenic stimulus",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002437",
      "best_source_term_label": "inflammatory response to antigenic stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002437"
      ],
      "supporting_source_term_labels": [
        "inflammatory response to antigenic stimulus"
      ],
      "supporting_source_node_names": [
        "Airway Inflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "GO:0002437",
      "term_label": "inflammatory response to antigenic stimulus",
      "score": 0.234709,
      "direct_score": 0.0,
      "propagated_score": 0.263846,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0001806",
      "best_source_term_label": "type IV hypersensitivity",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001806"
      ],
      "supporting_source_term_labels": [
        "type IV hypersensitivity"
      ],
      "supporting_source_node_names": [
        "Re-exposure-driven effector T-cell recruitment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002437" } }));
