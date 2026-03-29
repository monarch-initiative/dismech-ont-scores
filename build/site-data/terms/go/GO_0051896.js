window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051896"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051896",
  "term_label": "regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.318182,
  "mean_score": 0.318182,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0051896",
      "term_label": "regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
      "score": 0.318182,
      "direct_score": 0.0,
      "propagated_score": 0.318182,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0051898",
      "best_source_term_label": "negative regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051898"
      ],
      "supporting_source_term_labels": [
        "negative regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction"
      ],
      "supporting_source_node_names": [
        "PTEN Tumor Suppressor Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051896" } }));
