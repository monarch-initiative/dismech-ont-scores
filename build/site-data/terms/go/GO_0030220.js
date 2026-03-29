window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030220"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030220",
  "term_label": "platelet formation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Immune Thrombocytopenia",
      "disease_term_id": "MONDO:0008558",
      "source_file": "Immune_Thrombocytopenia.yaml",
      "term_id": "GO:0030220",
      "term_label": "platelet formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0030220",
      "best_source_term_label": "platelet formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030220"
      ],
      "supporting_source_term_labels": [
        "platelet formation"
      ],
      "supporting_source_node_names": [
        "Impaired Megakaryopoiesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030220" } }));
