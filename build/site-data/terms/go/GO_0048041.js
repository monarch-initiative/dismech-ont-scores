window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048041"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048041",
  "term_label": "focal adhesion assembly",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.347826,
  "mean_score": 0.347826,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0048041",
      "term_label": "focal adhesion assembly",
      "score": 0.347826,
      "direct_score": 0.347826,
      "propagated_score": 0.347826,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0048041",
      "best_source_term_label": "focal adhesion assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048041"
      ],
      "supporting_source_term_labels": [
        "focal adhesion assembly"
      ],
      "supporting_source_node_names": [
        "Defective Focal Adhesion and Integrin Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048041" } }));
