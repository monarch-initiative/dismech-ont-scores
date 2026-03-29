window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006417"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006417",
  "term_label": "regulation of translation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.142857,
  "mean_score": 0.142857,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "GO:0006417",
      "term_label": "regulation of translation",
      "score": 0.142857,
      "direct_score": 0.142857,
      "propagated_score": 0.142857,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006417",
      "best_source_term_label": "regulation of translation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006417"
      ],
      "supporting_source_term_labels": [
        "regulation of translation"
      ],
      "supporting_source_node_names": [
        "Axin1-AKT1-mTORC1-Shh translational dysregulation in HERS"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006417" } }));
