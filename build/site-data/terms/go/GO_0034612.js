window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034612"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034612",
  "term_label": "response to tumor necrosis factor",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "GO:0034612",
      "term_label": "response to tumor necrosis factor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0034612",
      "best_source_term_label": "response to tumor necrosis factor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034612"
      ],
      "supporting_source_term_labels": [
        "response to tumor necrosis factor"
      ],
      "supporting_source_node_names": [
        "Dysregulated Th1/Th17 cytokine signaling with IL-12/23 and TNF-\u03b1 involvement",
        "Non-caseating granulomatous inflammation with epithelioid histiocytes"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034612" } }));
