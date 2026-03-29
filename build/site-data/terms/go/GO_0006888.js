window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006888"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006888",
  "term_label": "endoplasmic reticulum to Golgi vesicle-mediated transport",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.367647,
  "mean_score": 0.367647,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0006888",
      "term_label": "endoplasmic reticulum to Golgi vesicle-mediated transport",
      "score": 0.367647,
      "direct_score": 0.367647,
      "propagated_score": 0.367647,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006888",
      "best_source_term_label": "endoplasmic reticulum to Golgi vesicle-mediated transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006888"
      ],
      "supporting_source_term_labels": [
        "endoplasmic reticulum to Golgi vesicle-mediated transport"
      ],
      "supporting_source_node_names": [
        "Ubiquitin-Proteasome Pathway Dysregulation (KLHL40)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006888" } }));
