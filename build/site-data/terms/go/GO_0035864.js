window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035864"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035864",
  "term_label": "response to potassium ion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.213333,
  "mean_score": 0.213333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "GO:0035864",
      "term_label": "response to potassium ion",
      "score": 0.213333,
      "direct_score": 0.213333,
      "propagated_score": 0.213333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0035864",
      "best_source_term_label": "response to potassium ion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035864"
      ],
      "supporting_source_term_labels": [
        "response to potassium ion"
      ],
      "supporting_source_node_names": [
        "Potassium-mimetic cellular uptake"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035864" } }));
