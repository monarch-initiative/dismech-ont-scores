window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007173"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007173",
  "term_label": "epidermal growth factor receptor signaling pathway",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "EGFR-Mutant Non-Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0005061",
      "source_file": "EGFR_Mutant_NSCLC.yaml",
      "term_id": "GO:0007173",
      "term_label": "epidermal growth factor receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007173",
      "best_source_term_label": "epidermal growth factor receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007173"
      ],
      "supporting_source_term_labels": [
        "epidermal growth factor receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "EGFR Oncogenic Mutations"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "HPV-Negative Head and Neck Cancer",
      "disease_term_id": "MONDO:0010150",
      "source_file": "HPV_Negative_Head_and_Neck_Cancer.yaml",
      "term_id": "GO:0007173",
      "term_label": "epidermal growth factor receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007173",
      "best_source_term_label": "epidermal growth factor receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007173"
      ],
      "supporting_source_term_labels": [
        "epidermal growth factor receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "EGFR Overexpression and Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Triple-Negative Breast Cancer",
      "disease_term_id": "MONDO:0005494",
      "source_file": "Triple_Negative_Breast_Cancer.yaml",
      "term_id": "GO:0007173",
      "term_label": "epidermal growth factor receptor signaling pathway",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007173",
      "best_source_term_label": "epidermal growth factor receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007173"
      ],
      "supporting_source_term_labels": [
        "epidermal growth factor receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Alternative Oncogenic Pathways"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007173" } }));
