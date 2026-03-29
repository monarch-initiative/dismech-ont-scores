window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0097398"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0097398",
  "term_label": "cellular response to interleukin-17",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.078431,
  "mean_score": 0.078431,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Netherton syndrome",
      "disease_term_id": "MONDO:0009735",
      "source_file": "Netherton_Syndrome.yaml",
      "term_id": "GO:0097398",
      "term_label": "cellular response to interleukin-17",
      "score": 0.078431,
      "direct_score": 0.0,
      "propagated_score": 0.078431,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0097400",
      "best_source_term_label": "interleukin-17-mediated signaling pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0097400"
      ],
      "supporting_source_term_labels": [
        "interleukin-17-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "IL-17/IL-36 inflammatory amplification"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0097398" } }));
