window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050805"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050805",
  "term_label": "negative regulation of synaptic transmission",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "GO:0050805",
      "term_label": "negative regulation of synaptic transmission",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0050805",
      "best_source_term_label": "negative regulation of synaptic transmission",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050805"
      ],
      "supporting_source_term_labels": [
        "negative regulation of synaptic transmission"
      ],
      "supporting_source_node_names": [
        "Aberrant neuronal excitability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050805" } }));
