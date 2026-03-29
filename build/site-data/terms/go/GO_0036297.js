window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0036297"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0036297",
  "term_label": "interstrand cross-link repair",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.684211,
  "mean_score": 0.684211,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0036297",
      "term_label": "interstrand cross-link repair",
      "score": 0.684211,
      "direct_score": 0.684211,
      "propagated_score": 0.684211,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0036297",
      "best_source_term_label": "interstrand cross-link repair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0036297"
      ],
      "supporting_source_term_labels": [
        "interstrand cross-link repair"
      ],
      "supporting_source_node_names": [
        "DNA Repair Deficiency",
        "ID Complex Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0036297" } }));
