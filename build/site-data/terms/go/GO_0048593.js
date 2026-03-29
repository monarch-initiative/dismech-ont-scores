window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048593"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048593",
  "term_label": "camera-type eye morphogenesis",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "GO:0048593",
      "term_label": "camera-type eye morphogenesis",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0060042",
      "best_source_term_label": "retina morphogenesis in camera-type eye",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060042"
      ],
      "supporting_source_term_labels": [
        "retina morphogenesis in camera-type eye"
      ],
      "supporting_source_node_names": [
        "Retinal basement membrane disruption and eye malformations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048593" } }));
