window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008589"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008589",
  "term_label": "regulation of smoothened signaling pathway",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.491926,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "PTCH1-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958174",
      "source_file": "PTCH1-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "GO:0008589",
      "term_label": "regulation of smoothened signaling pathway",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045879",
      "best_source_term_label": "negative regulation of smoothened signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045879"
      ],
      "supporting_source_term_labels": [
        "negative regulation of smoothened signaling pathway"
      ],
      "supporting_source_node_names": [
        "PTCH1 Loss with SMO Disinhibition"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "GO:0008589",
      "term_label": "regulation of smoothened signaling pathway",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045879",
      "best_source_term_label": "negative regulation of smoothened signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045879"
      ],
      "supporting_source_term_labels": [
        "negative regulation of smoothened signaling pathway"
      ],
      "supporting_source_node_names": [
        "SUFU Loss with GLI Derepression"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "GO:0008589",
      "term_label": "regulation of smoothened signaling pathway",
      "score": 0.320821,
      "direct_score": 0.0,
      "propagated_score": 0.388889,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045879",
      "best_source_term_label": "negative regulation of smoothened signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045879"
      ],
      "supporting_source_term_labels": [
        "negative regulation of smoothened signaling pathway"
      ],
      "supporting_source_node_names": [
        "SUFU Germline Mutations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008589" } }));
