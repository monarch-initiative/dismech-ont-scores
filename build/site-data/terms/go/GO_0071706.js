window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071706"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071706",
  "term_label": "tumor necrosis factor superfamily cytokine production",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "GO:0071706",
      "term_label": "tumor necrosis factor superfamily cytokine production",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0032640",
      "best_source_term_label": "tumor necrosis factor production",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032640"
      ],
      "supporting_source_term_labels": [
        "tumor necrosis factor production"
      ],
      "supporting_source_node_names": [
        "Immune Response Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071706" } }));
