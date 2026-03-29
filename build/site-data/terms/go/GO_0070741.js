window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070741"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070741",
  "term_label": "response to interleukin-6",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.175,
  "mean_score": 0.175,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Multicentric Castleman Disease",
      "disease_term_id": "MONDO:0019754",
      "source_file": "Multicentric_Castleman_Disease.yaml",
      "term_id": "GO:0070741",
      "term_label": "response to interleukin-6",
      "score": 0.175,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0070102",
      "best_source_term_label": "interleukin-6-mediated signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0070102"
      ],
      "supporting_source_term_labels": [
        "interleukin-6-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "IL-6 Hypersecretion and Cytokine Storm"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070741" } }));
