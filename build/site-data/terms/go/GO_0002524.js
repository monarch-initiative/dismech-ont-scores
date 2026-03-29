window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002524"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002524",
  "term_label": "hypersensitivity",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.538462,
  "mean_score": 0.538462,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "GO:0002524",
      "term_label": "hypersensitivity",
      "score": 0.538462,
      "direct_score": 0.0,
      "propagated_score": 0.538462,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0001806",
      "best_source_term_label": "type IV hypersensitivity",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001806"
      ],
      "supporting_source_term_labels": [
        "type IV hypersensitivity"
      ],
      "supporting_source_node_names": [
        "Re-exposure-driven effector T-cell recruitment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002524" } }));
