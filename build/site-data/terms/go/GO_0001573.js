window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001573"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001573",
  "term_label": "ganglioside metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tay-Sachs Disease",
      "disease_term_id": "MONDO:0010100",
      "source_file": "Tay-Sachs_Disease.yaml",
      "term_id": "GO:0001573",
      "term_label": "ganglioside metabolic process",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0006689",
      "best_source_term_label": "ganglioside catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006689"
      ],
      "supporting_source_term_labels": [
        "ganglioside catabolic process"
      ],
      "supporting_source_node_names": [
        "Hexosaminidase A deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001573" } }));
