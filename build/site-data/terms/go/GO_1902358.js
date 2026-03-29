window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1902358"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1902358",
  "term_label": "sulfate transmembrane transport",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "GO:1902358",
      "term_label": "sulfate transmembrane transport",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:1902358",
      "best_source_term_label": "sulfate transmembrane transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902358"
      ],
      "supporting_source_term_labels": [
        "sulfate transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Sulfate Transport Deficiency in Chondrocytes"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1902358" } }));
