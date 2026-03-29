window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0098656"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0098656",
  "term_label": "monoatomic anion transmembrane transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28,
  "mean_score": 0.28,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0098656",
      "term_label": "monoatomic anion transmembrane transport",
      "score": 0.28,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:1902476",
      "best_source_term_label": "chloride transmembrane transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902476"
      ],
      "supporting_source_term_labels": [
        "chloride transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Increased cAMP"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0098656" } }));
