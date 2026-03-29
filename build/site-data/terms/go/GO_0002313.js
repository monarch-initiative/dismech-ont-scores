window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002313"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002313",
  "term_label": "mature B cell differentiation involved in immune response",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0002313",
      "term_label": "mature B cell differentiation involved in immune response",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0002317",
      "best_source_term_label": "plasma cell differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002317"
      ],
      "supporting_source_term_labels": [
        "plasma cell differentiation"
      ],
      "supporting_source_node_names": [
        "Autoimmune and IgG4-mediated inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002313" } }));
