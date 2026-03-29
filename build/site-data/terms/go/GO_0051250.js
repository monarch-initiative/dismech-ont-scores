window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051250"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051250",
  "term_label": "negative regulation of lymphocyte activation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4375,
  "mean_score": 0.4375,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hepatitis B",
      "disease_term_id": "MONDO:0005344",
      "source_file": "Hepatitis_B.yaml",
      "term_id": "GO:0051250",
      "term_label": "negative regulation of lymphocyte activation",
      "score": 0.4375,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0050868",
      "best_source_term_label": "negative regulation of T cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050868"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell activation"
      ],
      "supporting_source_node_names": [
        "Immune Evasion and T Cell Exhaustion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051250" } }));
