window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048010"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048010",
  "term_label": "vascular endothelial growth factor receptor signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.32,
  "mean_score": 0.32,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Clear Cell Renal Cell Carcinoma",
      "disease_term_id": "MONDO:0005005",
      "source_file": "Clear_Cell_Renal_Cell_Carcinoma.yaml",
      "term_id": "GO:0048010",
      "term_label": "vascular endothelial growth factor receptor signaling pathway",
      "score": 0.32,
      "direct_score": 0.32,
      "propagated_score": 0.32,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0048010",
      "best_source_term_label": "vascular endothelial growth factor receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048010"
      ],
      "supporting_source_term_labels": [
        "vascular endothelial growth factor receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "VEGF-Driven Angiogenesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048010" } }));
