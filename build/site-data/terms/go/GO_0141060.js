window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0141060"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0141060",
  "term_label": "disruption of anatomical structure in another organism",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.245,
  "mean_score": 0.245,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0141060",
      "term_label": "disruption of anatomical structure in another organism",
      "score": 0.245,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0031640",
      "best_source_term_label": "killing of cells of another organism",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0031640"
      ],
      "supporting_source_term_labels": [
        "killing of cells of another organism"
      ],
      "supporting_source_node_names": [
        "Accessory Toxins and Virulence Factors"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0141060" } }));
