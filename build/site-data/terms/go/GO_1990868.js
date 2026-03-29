window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1990868"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1990868",
  "term_label": "response to chemokine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.175,
  "mean_score": 0.175,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "GO:1990868",
      "term_label": "response to chemokine",
      "score": 0.175,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0070098",
      "best_source_term_label": "chemokine-mediated signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1990868" } }));
