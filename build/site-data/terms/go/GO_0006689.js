window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006689"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006689",
  "term_label": "ganglioside catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tay-Sachs Disease",
      "disease_term_id": "MONDO:0010100",
      "source_file": "Tay-Sachs_Disease.yaml",
      "term_id": "GO:0006689",
      "term_label": "ganglioside catabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006689",
      "best_source_term_label": "ganglioside catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006689" } }));
