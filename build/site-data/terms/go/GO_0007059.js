window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007059"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007059",
  "term_label": "chromosome segregation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "GO:0007059",
      "term_label": "chromosome segregation",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007059",
      "best_source_term_label": "chromosome segregation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007059"
      ],
      "supporting_source_term_labels": [
        "chromosome segregation"
      ],
      "supporting_source_node_names": [
        "Genomic Instability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007059" } }));
