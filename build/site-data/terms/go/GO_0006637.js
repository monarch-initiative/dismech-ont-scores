window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006637"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006637",
  "term_label": "acyl-CoA metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.291667,
  "mean_score": 0.291667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Methylmalonic Acidemia",
      "disease_term_id": "MONDO:0002012",
      "source_file": "Methylmalonic_Acidemia.yaml",
      "term_id": "GO:0006637",
      "term_label": "acyl-CoA metabolic process",
      "score": 0.291667,
      "direct_score": 0.0,
      "propagated_score": 0.291667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0046491",
      "best_source_term_label": "L-methylmalonyl-CoA metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046491"
      ],
      "supporting_source_term_labels": [
        "L-methylmalonyl-CoA metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired methylmalonyl-CoA metabolism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006637" } }));
