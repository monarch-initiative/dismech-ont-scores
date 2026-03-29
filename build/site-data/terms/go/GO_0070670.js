window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070670"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070670",
  "term_label": "response to interleukin-4",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.077837,
  "mean_score": 0.070054,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "GO:0070670",
      "term_label": "response to interleukin-4",
      "score": 0.077837,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0035771",
      "best_source_term_label": "interleukin-4-mediated signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0035771"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "GO:0070670",
      "term_label": "response to interleukin-4",
      "score": 0.06227,
      "direct_score": 0.0,
      "propagated_score": 0.07,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0035771",
      "best_source_term_label": "interleukin-4-mediated signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0035771"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070670" } }));
