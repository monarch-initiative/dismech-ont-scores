window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032732"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032732",
  "term_label": "positive regulation of interleukin-1 production",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28,
  "mean_score": 0.28,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "GO:0032732",
      "term_label": "positive regulation of interleukin-1 production",
      "score": 0.28,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0032731",
      "best_source_term_label": "positive regulation of interleukin-1 beta production",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032731"
      ],
      "supporting_source_term_labels": [
        "positive regulation of interleukin-1 beta production"
      ],
      "supporting_source_node_names": [
        "Excessive IL-1beta production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032732" } }));
