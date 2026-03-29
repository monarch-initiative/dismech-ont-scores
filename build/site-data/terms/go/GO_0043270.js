window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043270"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043270",
  "term_label": "positive regulation of monoatomic ion transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.291667,
  "mean_score": 0.291667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0043270",
      "term_label": "positive regulation of monoatomic ion transport",
      "score": 0.291667,
      "direct_score": 0.0,
      "propagated_score": 0.291667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0034758",
      "best_source_term_label": "positive regulation of iron ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034758"
      ],
      "supporting_source_term_labels": [
        "positive regulation of iron ion transport"
      ],
      "supporting_source_node_names": [
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043270" } }));
