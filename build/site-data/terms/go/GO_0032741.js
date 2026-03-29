window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032741"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032741",
  "term_label": "positive regulation of interleukin-18 production",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "GO:0032741",
      "term_label": "positive regulation of interleukin-18 production",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0032741",
      "best_source_term_label": "positive regulation of interleukin-18 production",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032741"
      ],
      "supporting_source_term_labels": [
        "positive regulation of interleukin-18 production"
      ],
      "supporting_source_node_names": [
        "Excessive IL-18 production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032741" } }));
