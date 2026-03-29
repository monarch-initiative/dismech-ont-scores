window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1902275"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1902275",
  "term_label": "regulation of chromatin organization",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.350877,
  "mean_score": 0.350877,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CTCF-related Neurodevelopmental Disorder",
      "disease_term_id": "MONDO:0700294",
      "source_file": "CTCF-related_Neurodevelopmental_Disorder.yaml",
      "term_id": "GO:1902275",
      "term_label": "regulation of chromatin organization",
      "score": 0.350877,
      "direct_score": 0.350877,
      "propagated_score": 0.350877,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:1902275",
      "best_source_term_label": "regulation of chromatin organization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902275"
      ],
      "supporting_source_term_labels": [
        "regulation of chromatin organization"
      ],
      "supporting_source_node_names": [
        "Chromatin Architecture Disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1902275" } }));
