window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044458"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044458",
  "term_label": "motile cilium assembly",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "GO:0044458",
      "term_label": "motile cilium assembly",
      "score": 0.625,
      "direct_score": 0.625,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0044458",
      "best_source_term_label": "motile cilium assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044458"
      ],
      "supporting_source_term_labels": [
        "motile cilium assembly"
      ],
      "supporting_source_node_names": [
        "Situs Inversus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044458" } }));
