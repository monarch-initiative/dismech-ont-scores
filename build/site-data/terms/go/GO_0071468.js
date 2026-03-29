window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071468"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071468",
  "term_label": "cellular response to acidic pH",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0071468",
      "term_label": "cellular response to acidic pH",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0071468",
      "best_source_term_label": "cellular response to acidic pH",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071468" } }));
