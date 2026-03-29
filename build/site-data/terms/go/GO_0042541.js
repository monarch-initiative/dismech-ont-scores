window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042541"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042541",
  "term_label": "hemoglobin biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "GO:0042541",
      "term_label": "hemoglobin biosynthetic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042541",
      "best_source_term_label": "hemoglobin biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042541"
      ],
      "supporting_source_term_labels": [
        "hemoglobin biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Beta-Globin Chain Excess and Hemoglobin H Formation",
        "Defective Alpha-Globin Synthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "GO:0042541",
      "term_label": "hemoglobin biosynthetic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042541",
      "best_source_term_label": "hemoglobin biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042541"
      ],
      "supporting_source_term_labels": [
        "hemoglobin biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Defective Beta-Globin Synthesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042541" } }));
