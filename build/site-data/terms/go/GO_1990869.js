window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1990869"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1990869",
  "term_label": "cellular response to chemokine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "GO:1990869",
      "term_label": "cellular response to chemokine",
      "score": 0.25,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0070098",
      "best_source_term_label": "chemokine-mediated signaling pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0070098"
      ],
      "supporting_source_term_labels": [
        "chemokine-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Classical Monocyte Enrichment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1990869" } }));
