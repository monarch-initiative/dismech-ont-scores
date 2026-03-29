window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050854"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050854",
  "term_label": "regulation of antigen receptor-mediated signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "GO:0050854",
      "term_label": "regulation of antigen receptor-mediated signaling pathway",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0050860",
      "best_source_term_label": "negative regulation of T cell receptor signaling pathway",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050860"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Polygenic Susceptibility"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050854" } }));
