window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043085"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043085",
  "term_label": "positive regulation of catalytic activity",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.384615,
  "mean_score": 0.384615,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "N-Acetylglutamate Synthase Deficiency",
      "disease_term_id": "MONDO:0009377",
      "source_file": "N-Acetylglutamate_Synthase_Deficiency.yaml",
      "term_id": "GO:0043085",
      "term_label": "positive regulation of catalytic activity",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043085",
      "best_source_term_label": "positive regulation of catalytic activity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043085" } }));
