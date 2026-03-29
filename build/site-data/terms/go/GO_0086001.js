window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0086001"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0086001",
  "term_label": "cardiac muscle cell action potential",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atrial Fibrillation",
      "disease_term_id": "MONDO:0004981",
      "source_file": "Atrial_Fibrillation.yaml",
      "term_id": "GO:0086001",
      "term_label": "cardiac muscle cell action potential",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0086001",
      "best_source_term_label": "cardiac muscle cell action potential",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0086001"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle cell action potential"
      ],
      "supporting_source_node_names": [
        "Atrial Electrical Remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0086001" } }));
