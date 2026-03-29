window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061008"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061008",
  "term_label": "hepaticobiliary system development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.32,
  "mean_score": 0.32,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0061008",
      "term_label": "hepaticobiliary system development",
      "score": 0.32,
      "direct_score": 0.0,
      "propagated_score": 0.32,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0001889",
      "best_source_term_label": "liver development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0001889"
      ],
      "supporting_source_term_labels": [
        "liver development"
      ],
      "supporting_source_node_names": [
        "Persistent hepatocarcinogenic programs under NTBC therapy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061008" } }));
