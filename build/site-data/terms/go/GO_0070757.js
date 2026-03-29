window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070757"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070757",
  "term_label": "interleukin-35-mediated signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "GO:0070757",
      "term_label": "interleukin-35-mediated signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0070757",
      "best_source_term_label": "interleukin-35-mediated signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070757"
      ],
      "supporting_source_term_labels": [
        "interleukin-35-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Hypothalamic Leptin Resistance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070757" } }));
