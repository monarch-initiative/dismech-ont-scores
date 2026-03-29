window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019730"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019730",
  "term_label": "antimicrobial humoral response",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "GO:0019730",
      "term_label": "antimicrobial humoral response",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0019730",
      "best_source_term_label": "antimicrobial humoral response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019730"
      ],
      "supporting_source_term_labels": [
        "antimicrobial humoral response"
      ],
      "supporting_source_node_names": [
        "Antibiotic-induced dysbiosis of ear canal microbiota",
        "Disruption of cerumen antimicrobial barrier"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "GO:0019730",
      "term_label": "antimicrobial humoral response",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0019730",
      "best_source_term_label": "antimicrobial humoral response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019730"
      ],
      "supporting_source_term_labels": [
        "antimicrobial humoral response"
      ],
      "supporting_source_node_names": [
        "Antimicrobial Defense Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019730" } }));
