window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006067"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006067",
  "term_label": "ethanol metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Auto-Brewery Syndrome",
      "disease_term_id": "MONDO:0971031",
      "source_file": "Auto-Brewery_Syndrome.yaml",
      "term_id": "GO:0006067",
      "term_label": "ethanol metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006067",
      "best_source_term_label": "ethanol metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006067"
      ],
      "supporting_source_term_labels": [
        "ethanol metabolic process"
      ],
      "supporting_source_node_names": [
        "Fungal Gut Fermentation",
        "Impaired Hepatic Ethanol Clearance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006067" } }));
