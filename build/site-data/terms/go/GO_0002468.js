window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002468"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002468",
  "term_label": "dendritic cell antigen processing and presentation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.480769,
  "mean_score": 0.480769,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "GO:0002468",
      "term_label": "dendritic cell antigen processing and presentation",
      "score": 0.480769,
      "direct_score": 0.480769,
      "propagated_score": 0.480769,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0002468",
      "best_source_term_label": "dendritic cell antigen processing and presentation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002468"
      ],
      "supporting_source_term_labels": [
        "dendritic cell antigen processing and presentation"
      ],
      "supporting_source_node_names": [
        "Allergen-specific T-cell priming"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002468" } }));
