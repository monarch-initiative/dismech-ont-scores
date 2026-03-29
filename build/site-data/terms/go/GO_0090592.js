window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090592"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090592",
  "term_label": "DNA synthesis involved in DNA replication",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.552632,
  "mean_score": 0.552632,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0090592",
      "term_label": "DNA synthesis involved in DNA replication",
      "score": 0.552632,
      "direct_score": 0.0,
      "propagated_score": 0.552632,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0019985",
      "best_source_term_label": "translesion synthesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090592" } }));
