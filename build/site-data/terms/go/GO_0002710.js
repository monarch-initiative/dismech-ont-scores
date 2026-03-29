window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002710"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002710",
  "term_label": "negative regulation of T cell mediated immunity",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "HPV-Positive Head and Neck Cancer",
      "disease_term_id": "MONDO:0044926",
      "source_file": "HPV_Positive_Head_and_Neck_Cancer.yaml",
      "term_id": "GO:0002710",
      "term_label": "negative regulation of T cell mediated immunity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002710",
      "best_source_term_label": "negative regulation of T cell mediated immunity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002710"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell mediated immunity"
      ],
      "supporting_source_node_names": [
        "Immune Evasion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nasopharyngeal Carcinoma",
      "disease_term_id": "MONDO:0015459",
      "source_file": "Nasopharyngeal_Carcinoma.yaml",
      "term_id": "GO:0002710",
      "term_label": "negative regulation of T cell mediated immunity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002710",
      "best_source_term_label": "negative regulation of T cell mediated immunity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002710"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell mediated immunity"
      ],
      "supporting_source_node_names": [
        "Immune Evasion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002710" } }));
