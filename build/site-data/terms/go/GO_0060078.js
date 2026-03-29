window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060078"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060078",
  "term_label": "regulation of postsynaptic membrane potential",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.233333,
  "mean_score": 0.233333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "GO:0060078",
      "term_label": "regulation of postsynaptic membrane potential",
      "score": 0.233333,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0060079",
      "best_source_term_label": "excitatory postsynaptic potential",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060079"
      ],
      "supporting_source_term_labels": [
        "excitatory postsynaptic potential"
      ],
      "supporting_source_node_names": [
        "Excitotoxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060078" } }));
