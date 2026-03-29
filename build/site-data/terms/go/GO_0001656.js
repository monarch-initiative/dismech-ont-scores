window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001656"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001656",
  "term_label": "metanephros development",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "GO:0001656",
      "term_label": "metanephros development",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001656",
      "best_source_term_label": "metanephros development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001656"
      ],
      "supporting_source_term_labels": [
        "metanephros development"
      ],
      "supporting_source_node_names": [
        "WT1 Inactivation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001656" } }));
