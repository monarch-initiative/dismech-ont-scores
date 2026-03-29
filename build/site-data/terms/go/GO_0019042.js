window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019042"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019042",
  "term_label": "viral latency",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "GO:0019042",
      "term_label": "viral latency",
      "score": 0.4,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0019043",
      "best_source_term_label": "establishment of viral latency",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019043"
      ],
      "supporting_source_term_labels": [
        "establishment of viral latency"
      ],
      "supporting_source_node_names": [
        "Establishment of latency in sensory ganglia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019042" } }));
