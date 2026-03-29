window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051881"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051881",
  "term_label": "regulation of mitochondrial membrane potential",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fabry disease",
      "disease_term_id": "MONDO:0010526",
      "source_file": "Fabry_Disease.yaml",
      "term_id": "GO:0051881",
      "term_label": "regulation of mitochondrial membrane potential",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0051881",
      "best_source_term_label": "regulation of mitochondrial membrane potential",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051881"
      ],
      "supporting_source_term_labels": [
        "regulation of mitochondrial membrane potential"
      ],
      "supporting_source_node_names": [
        "Mitochondrial dysfunction and oxidative stress"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051881" } }));
