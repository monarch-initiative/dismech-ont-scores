window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034757"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034757",
  "term_label": "negative regulation of iron ion transport",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.78125,
  "mean_score": 0.78125,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0034757",
      "term_label": "negative regulation of iron ion transport",
      "score": 0.78125,
      "direct_score": 0.78125,
      "propagated_score": 0.78125,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0034757",
      "best_source_term_label": "negative regulation of iron ion transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034757"
      ],
      "supporting_source_term_labels": [
        "negative regulation of iron ion transport"
      ],
      "supporting_source_node_names": [
        "HFE Loss Lowers Hepcidin"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034757" } }));
