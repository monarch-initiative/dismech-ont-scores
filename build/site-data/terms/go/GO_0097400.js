window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0097400"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0097400",
  "term_label": "interleukin-17-mediated signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.156863,
  "mean_score": 0.156863,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Netherton syndrome",
      "disease_term_id": "MONDO:0009735",
      "source_file": "Netherton_Syndrome.yaml",
      "term_id": "GO:0097400",
      "term_label": "interleukin-17-mediated signaling pathway",
      "score": 0.156863,
      "direct_score": 0.156863,
      "propagated_score": 0.156863,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0097400",
      "best_source_term_label": "interleukin-17-mediated signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0097400" } }));
