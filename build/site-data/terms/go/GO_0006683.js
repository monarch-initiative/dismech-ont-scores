window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006683"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006683",
  "term_label": "galactosylceramide catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.222222,
  "mean_score": 0.222222,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0006683",
      "term_label": "galactosylceramide catabolic process",
      "score": 0.222222,
      "direct_score": 0.222222,
      "propagated_score": 0.222222,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006683",
      "best_source_term_label": "galactosylceramide catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006683"
      ],
      "supporting_source_term_labels": [
        "galactosylceramide catabolic process"
      ],
      "supporting_source_node_names": [
        "GALC Deficiency and Psychosine Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006683" } }));
