window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0099155"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0099155",
  "term_label": "synaptic transmission, noradrenergic",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tetanus",
      "disease_term_id": "MONDO:0005526",
      "source_file": "Tetanus.yaml",
      "term_id": "GO:0099155",
      "term_label": "synaptic transmission, noradrenergic",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0099155",
      "best_source_term_label": "synaptic transmission, noradrenergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0099155"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, noradrenergic"
      ],
      "supporting_source_node_names": [
        "Autonomic Nervous System Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0099155" } }));
