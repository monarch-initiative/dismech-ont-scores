window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006970"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006970",
  "term_label": "response to osmotic stress",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.224,
  "mean_score": 0.224,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "GO:0006970",
      "term_label": "response to osmotic stress",
      "score": 0.224,
      "direct_score": 0.0,
      "propagated_score": 0.224,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0071470",
      "best_source_term_label": "cellular response to osmotic stress",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071470"
      ],
      "supporting_source_term_labels": [
        "cellular response to osmotic stress"
      ],
      "supporting_source_node_names": [
        "Hyperammonemic neurotoxicity and cerebral edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006970" } }));
