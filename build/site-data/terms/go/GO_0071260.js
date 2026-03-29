window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071260"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071260",
  "term_label": "cellular response to mechanical stimulus",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Osteoporosis",
      "disease_term_id": "MONDO:0005298",
      "source_file": "Osteoporosis.yaml",
      "term_id": "GO:0071260",
      "term_label": "cellular response to mechanical stimulus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Osteocyte Mechanosensing Disruption in Microgravity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "GO:0071260",
      "term_label": "cellular response to mechanical stimulus",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Impaired Mechanotransduction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071260" } }));
