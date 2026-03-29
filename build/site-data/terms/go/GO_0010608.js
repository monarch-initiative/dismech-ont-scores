window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010608"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010608",
  "term_label": "post-transcriptional regulation of gene expression",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1,
  "mean_score": 0.1,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "GO:0010608",
      "term_label": "post-transcriptional regulation of gene expression",
      "score": 0.1,
      "direct_score": 0.0,
      "propagated_score": 0.1,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0006417",
      "best_source_term_label": "regulation of translation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010608" } }));
