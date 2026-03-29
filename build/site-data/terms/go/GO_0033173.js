window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033173"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033173",
  "term_label": "calcineurin-NFAT signaling cascade",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "GO:0033173",
      "term_label": "calcineurin-NFAT signaling cascade",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0033173",
      "best_source_term_label": "calcineurin-NFAT signaling cascade",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0033173"
      ],
      "supporting_source_term_labels": [
        "calcineurin-NFAT signaling cascade"
      ],
      "supporting_source_node_names": [
        "Impaired NFAT signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033173" } }));
