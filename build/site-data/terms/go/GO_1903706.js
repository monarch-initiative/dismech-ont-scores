window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1903706"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1903706",
  "term_label": "regulation of hemopoiesis",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.054036,
  "mean_score": 0.054036,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:1903706",
      "term_label": "regulation of hemopoiesis",
      "score": 0.054036,
      "direct_score": 0.0,
      "propagated_score": 0.054036,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0045580",
      "best_source_term_label": "regulation of T cell differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045580"
      ],
      "supporting_source_term_labels": [
        "regulation of T cell differentiation"
      ],
      "supporting_source_node_names": [
        "Dendritic-cell and T-cell adaptive immune phase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1903706" } }));
