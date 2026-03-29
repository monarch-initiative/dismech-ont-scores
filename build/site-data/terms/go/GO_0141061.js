window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0141061"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0141061",
  "term_label": "disruption of cell in another organism",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0141061",
      "term_label": "disruption of cell in another organism",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0031640",
      "best_source_term_label": "killing of cells of another organism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0141061" } }));
