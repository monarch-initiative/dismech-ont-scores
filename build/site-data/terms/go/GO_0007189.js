window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007189"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007189",
  "term_label": "adenylate cyclase-activating G protein-coupled receptor signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0007189",
      "term_label": "adenylate cyclase-activating G protein-coupled receptor signaling pathway",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007189",
      "best_source_term_label": "adenylate cyclase-activating G protein-coupled receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007189"
      ],
      "supporting_source_term_labels": [
        "adenylate cyclase-activating G protein-coupled receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Gs\u03b1 ADP-Ribosylation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007189" } }));
