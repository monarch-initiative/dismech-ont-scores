window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006558"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006558",
  "term_label": "L-phenylalanine metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.94,
  "mean_score": 0.94,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0006558",
      "term_label": "L-phenylalanine metabolic process",
      "score": 0.94,
      "direct_score": 0.8,
      "propagated_score": 0.94,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006558",
      "best_source_term_label": "L-phenylalanine metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006558",
        "GO:0006559"
      ],
      "supporting_source_term_labels": [
        "L-phenylalanine catabolic process",
        "L-phenylalanine metabolic process"
      ],
      "supporting_source_node_names": [
        "Hyperphenylalaninemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006558" } }));
