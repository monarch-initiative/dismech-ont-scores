window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006672"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006672",
  "term_label": "ceramide metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.251846,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tay-Sachs Disease",
      "disease_term_id": "MONDO:0010100",
      "source_file": "Tay-Sachs_Disease.yaml",
      "term_id": "GO:0006672",
      "term_label": "ceramide metabolic process",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006689",
      "best_source_term_label": "ganglioside catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0006672",
      "term_label": "ceramide metabolic process",
      "score": 0.067805,
      "direct_score": 0.0,
      "propagated_score": 0.076222,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006683",
      "best_source_term_label": "galactosylceramide catabolic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006672" } }));
