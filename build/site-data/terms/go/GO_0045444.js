window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045444"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045444",
  "term_label": "fat cell differentiation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.64,
  "mean_score": 0.3825,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "GO:0045444",
      "term_label": "fat cell differentiation",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0045444",
      "best_source_term_label": "fat cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045444"
      ],
      "supporting_source_term_labels": [
        "fat cell differentiation"
      ],
      "supporting_source_node_names": [
        "Lipomatous Overgrowth"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:0045444",
      "term_label": "fat cell differentiation",
      "score": 0.125,
      "direct_score": 0.125,
      "propagated_score": 0.125,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0045444",
      "best_source_term_label": "fat cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045444"
      ],
      "supporting_source_term_labels": [
        "fat cell differentiation"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045444" } }));
