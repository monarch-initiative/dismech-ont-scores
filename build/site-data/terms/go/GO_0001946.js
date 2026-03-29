window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001946"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001946",
  "term_label": "lymphangiogenesis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.32,
  "mean_score": 0.32,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "GO:0001946",
      "term_label": "lymphangiogenesis",
      "score": 0.32,
      "direct_score": 0.32,
      "propagated_score": 0.32,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001946",
      "best_source_term_label": "lymphangiogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001946"
      ],
      "supporting_source_term_labels": [
        "lymphangiogenesis"
      ],
      "supporting_source_node_names": [
        "Aberrant Vascular Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001946" } }));
