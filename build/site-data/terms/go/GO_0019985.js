window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019985"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019985",
  "term_label": "translesion synthesis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.789474,
  "mean_score": 0.789474,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0019985",
      "term_label": "translesion synthesis",
      "score": 0.789474,
      "direct_score": 0.789474,
      "propagated_score": 0.789474,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0019985",
      "best_source_term_label": "translesion synthesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019985"
      ],
      "supporting_source_term_labels": [
        "translesion synthesis"
      ],
      "supporting_source_node_names": [
        "PCNA Monoubiquitination and ICL Pathway Choice",
        "Translesion Synthesis Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019985" } }));
