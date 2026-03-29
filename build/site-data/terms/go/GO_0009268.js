window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009268"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009268",
  "term_label": "response to pH",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.196,
  "mean_score": 0.196,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0009268",
      "term_label": "response to pH",
      "score": 0.196,
      "direct_score": 0.0,
      "propagated_score": 0.196,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0071468",
      "best_source_term_label": "cellular response to acidic pH",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071468"
      ],
      "supporting_source_term_labels": [
        "cellular response to acidic pH"
      ],
      "supporting_source_node_names": [
        "Episodic metabolic decompensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009268" } }));
