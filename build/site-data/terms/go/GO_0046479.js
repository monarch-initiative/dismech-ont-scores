window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046479"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046479",
  "term_label": "glycosphingolipid catabolic process",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 0.577478,
  "mean_score": 0.333547,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tay-Sachs Disease",
      "disease_term_id": "MONDO:0010100",
      "source_file": "Tay-Sachs_Disease.yaml",
      "term_id": "GO:0046479",
      "term_label": "glycosphingolipid catabolic process",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "GO:0046479",
      "term_label": "glycosphingolipid catabolic process",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0046479",
      "best_source_term_label": "glycosphingolipid catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046479"
      ],
      "supporting_source_term_labels": [
        "glycosphingolipid catabolic process"
      ],
      "supporting_source_node_names": [
        "Glycosphingolipid and Ganglioside Accumulation in Brain"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0046479",
      "term_label": "glycosphingolipid catabolic process",
      "score": 0.08983,
      "direct_score": 0.0,
      "propagated_score": 0.108889,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006683",
      "best_source_term_label": "galactosylceramide catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046479" } }));
