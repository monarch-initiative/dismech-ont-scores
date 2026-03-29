window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006567"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006567",
  "term_label": "L-threonine catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Inherited Threoninemia",
      "disease_term_id": "MONDO:0010118",
      "source_file": "Inherited_Threoninemia.yaml",
      "term_id": "GO:0006567",
      "term_label": "L-threonine catabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006567",
      "best_source_term_label": "L-threonine catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006567"
      ],
      "supporting_source_term_labels": [
        "L-threonine catabolic process"
      ],
      "supporting_source_node_names": [
        "Hepatic threonine dehydratase deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006567" } }));
