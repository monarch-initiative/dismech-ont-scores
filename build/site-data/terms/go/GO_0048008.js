window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048008"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048008",
  "term_label": "platelet-derived growth factor receptor signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gastrointestinal Stromal Tumor",
      "disease_term_id": "MONDO:0011719",
      "source_file": "Gastrointestinal_Stromal_Tumor.yaml",
      "term_id": "GO:0048008",
      "term_label": "platelet-derived growth factor receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0048008",
      "best_source_term_label": "platelet-derived growth factor receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048008"
      ],
      "supporting_source_term_labels": [
        "platelet-derived growth factor receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "PDGFRA Receptor Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048008" } }));
