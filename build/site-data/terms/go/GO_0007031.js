window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007031"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007031",
  "term_label": "peroxisome organization",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0007031",
      "term_label": "peroxisome organization",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007031",
      "best_source_term_label": "peroxisome organization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007031",
        "GO:0016558"
      ],
      "supporting_source_term_labels": [
        "peroxisome organization",
        "protein import into peroxisome matrix"
      ],
      "supporting_source_node_names": [
        "Impaired Peroxisome Biogenesis and Import"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007031" } }));
