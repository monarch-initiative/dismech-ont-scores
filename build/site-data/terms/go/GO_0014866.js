window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0014866"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0014866",
  "term_label": "skeletal myofibril assembly",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.098039,
  "mean_score": 0.098039,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0014866",
      "term_label": "skeletal myofibril assembly",
      "score": 0.098039,
      "direct_score": 0.0,
      "propagated_score": 0.098039,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0030240",
      "best_source_term_label": "skeletal muscle thin filament assembly",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0014866" } }));
