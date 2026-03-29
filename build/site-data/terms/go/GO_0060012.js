window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060012"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060012",
  "term_label": "synaptic transmission, glycinergic",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.333333,
  "mean_score": 0.265128,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tetanus",
      "disease_term_id": "MONDO:0005526",
      "source_file": "Tetanus.yaml",
      "term_id": "GO:0060012",
      "term_label": "synaptic transmission, glycinergic",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060012",
      "best_source_term_label": "synaptic transmission, glycinergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060012"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, glycinergic"
      ],
      "supporting_source_node_names": [
        "Tetanus Toxin (Tetanospasmin) Action"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0060012",
      "term_label": "synaptic transmission, glycinergic",
      "score": 0.196923,
      "direct_score": 0.196923,
      "propagated_score": 0.196923,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060012",
      "best_source_term_label": "synaptic transmission, glycinergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060012"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, glycinergic"
      ],
      "supporting_source_node_names": [
        "NMDA receptor dysregulation and neurotransmission imbalance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060012" } }));
