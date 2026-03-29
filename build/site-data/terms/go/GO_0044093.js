window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044093"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044093",
  "term_label": "positive regulation of molecular function",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.269231,
  "mean_score": 0.269231,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "N-Acetylglutamate Synthase Deficiency",
      "disease_term_id": "MONDO:0009377",
      "source_file": "N-Acetylglutamate_Synthase_Deficiency.yaml",
      "term_id": "GO:0044093",
      "term_label": "positive regulation of molecular function",
      "score": 0.269231,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0043085",
      "best_source_term_label": "positive regulation of catalytic activity",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043085"
      ],
      "supporting_source_term_labels": [
        "positive regulation of catalytic activity"
      ],
      "supporting_source_node_names": [
        "Impaired arginine-mediated NAGS regulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044093" } }));
