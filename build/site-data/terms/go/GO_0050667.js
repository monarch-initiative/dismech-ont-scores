window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050667"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050667",
  "term_label": "homocysteine metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.78125,
  "mean_score": 0.78125,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Homocystinuria",
      "disease_term_id": "MONDO:0004737",
      "source_file": "Homocystinuria.yaml",
      "term_id": "GO:0050667",
      "term_label": "homocysteine metabolic process",
      "score": 0.78125,
      "direct_score": 0.78125,
      "propagated_score": 0.78125,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0050667",
      "best_source_term_label": "homocysteine metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050667"
      ],
      "supporting_source_term_labels": [
        "homocysteine metabolic process"
      ],
      "supporting_source_node_names": [
        "Disrupted transsulfuration and methionine metabolism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050667" } }));
