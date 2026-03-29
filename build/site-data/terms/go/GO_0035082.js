window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035082"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035082",
  "term_label": "axoneme assembly",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.416667,
  "mean_score": 0.416667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "GO:0035082",
      "term_label": "axoneme assembly",
      "score": 0.416667,
      "direct_score": 0.416667,
      "propagated_score": 0.416667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0035082",
      "best_source_term_label": "axoneme assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035082"
      ],
      "supporting_source_term_labels": [
        "axoneme assembly"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035082" } }));
