window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043576"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043576",
  "term_label": "regulation of respiratory gaseous exchange",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.34871,
  "mean_score": 0.330029,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "GO:0043576",
      "term_label": "regulation of respiratory gaseous exchange",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0002087",
      "best_source_term_label": "regulation of respiratory gaseous exchange by nervous system process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002087"
      ],
      "supporting_source_term_labels": [
        "regulation of respiratory gaseous exchange by nervous system process"
      ],
      "supporting_source_node_names": [
        "Brainstem Sneeze Circuit"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "HIDEA_Syndrome",
      "disease_term_id": "MONDO:0032780",
      "source_file": "HIDEA_Syndrome.yaml",
      "term_id": "GO:0043576",
      "term_label": "regulation of respiratory gaseous exchange",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0044065",
      "best_source_term_label": "regulation of respiratory system process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044065"
      ],
      "supporting_source_term_labels": [
        "regulation of respiratory system process"
      ],
      "supporting_source_node_names": [
        "Central Respiratory Control Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043576" } }));
