window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0170041"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0170041",
  "term_label": "non-proteinogenic amino acid metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.546875,
  "mean_score": 0.546875,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Homocystinuria",
      "disease_term_id": "MONDO:0004737",
      "source_file": "Homocystinuria.yaml",
      "term_id": "GO:0170041",
      "term_label": "non-proteinogenic amino acid metabolic process",
      "score": 0.546875,
      "direct_score": 0.0,
      "propagated_score": 0.546875,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0050667",
      "best_source_term_label": "homocysteine metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0170041" } }));
