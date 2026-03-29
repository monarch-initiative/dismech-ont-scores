window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030240"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030240",
  "term_label": "skeletal muscle thin filament assembly",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.196078,
  "mean_score": 0.196078,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0030240",
      "term_label": "skeletal muscle thin filament assembly",
      "score": 0.196078,
      "direct_score": 0.196078,
      "propagated_score": 0.196078,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0030240",
      "best_source_term_label": "skeletal muscle thin filament assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030240"
      ],
      "supporting_source_term_labels": [
        "skeletal muscle thin filament assembly"
      ],
      "supporting_source_node_names": [
        "Thin Filament Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030240" } }));
