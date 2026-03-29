window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051898"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051898",
  "term_label": "negative regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.454545,
  "mean_score": 0.454545,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0051898",
      "term_label": "negative regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
      "score": 0.454545,
      "direct_score": 0.454545,
      "propagated_score": 0.454545,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0051898",
      "best_source_term_label": "negative regulation of phosphatidylinositol 3-kinase/protein kinase B signal transduction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051898" } }));
