window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001890"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001890",
  "term_label": "placenta development",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.520833,
  "mean_score": 0.520833,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "GO:0001890",
      "term_label": "placenta development",
      "score": 0.520833,
      "direct_score": 0.520833,
      "propagated_score": 0.520833,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001890",
      "best_source_term_label": "placenta development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001890"
      ],
      "supporting_source_term_labels": [
        "placenta development"
      ],
      "supporting_source_node_names": [
        "Unbalanced placental vascular anastomoses"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001890" } }));
