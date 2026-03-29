window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008360"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008360",
  "term_label": "regulation of cell shape",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.214286,
  "mean_score": 0.214286,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0008360",
      "term_label": "regulation of cell shape",
      "score": 0.214286,
      "direct_score": 0.214286,
      "propagated_score": 0.214286,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0008360",
      "best_source_term_label": "regulation of cell shape",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008360"
      ],
      "supporting_source_term_labels": [
        "regulation of cell shape"
      ],
      "supporting_source_node_names": [
        "Actin-based motility and cell-to-cell spread"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008360" } }));
