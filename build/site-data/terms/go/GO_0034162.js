window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034162"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034162",
  "term_label": "toll-like receptor 9 signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.166667,
  "mean_score": 0.166667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "GO:0034162",
      "term_label": "toll-like receptor 9 signaling pathway",
      "score": 0.166667,
      "direct_score": 0.166667,
      "propagated_score": 0.166667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0034162",
      "best_source_term_label": "toll-like receptor 9 signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034162"
      ],
      "supporting_source_term_labels": [
        "toll-like receptor 9 signaling pathway"
      ],
      "supporting_source_node_names": [
        "TLR7/TLR9-Mediated Nucleic Acid Sensing"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034162" } }));
