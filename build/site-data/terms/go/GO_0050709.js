window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050709"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050709",
  "term_label": "negative regulation of protein secretion",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.233333,
  "mean_score": 0.233333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0050709",
      "term_label": "negative regulation of protein secretion",
      "score": 0.233333,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0046676",
      "best_source_term_label": "negative regulation of insulin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046676"
      ],
      "supporting_source_term_labels": [
        "negative regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Pancreatic Iron Toxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050709" } }));
