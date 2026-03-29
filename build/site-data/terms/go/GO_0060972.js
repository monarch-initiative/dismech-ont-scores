window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060972"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060972",
  "term_label": "left/right pattern formation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.3125,
  "mean_score": 0.3125,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "GO:0060972",
      "term_label": "left/right pattern formation",
      "score": 0.3125,
      "direct_score": 0.0,
      "propagated_score": 0.3125,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0007368",
      "best_source_term_label": "determination of left/right symmetry",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007368"
      ],
      "supporting_source_term_labels": [
        "determination of left/right symmetry"
      ],
      "supporting_source_node_names": [
        "Situs Inversus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060972" } }));
