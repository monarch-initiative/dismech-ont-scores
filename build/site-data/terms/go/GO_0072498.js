window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072498"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072498",
  "term_label": "embryonic skeletal joint development",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Spondylocarpotarsal Synostosis Syndrome",
      "disease_term_id": "MONDO:0010094",
      "source_file": "Spondylocarpotarsal_Synostosis_Syndrome.yaml",
      "term_id": "GO:0072498",
      "term_label": "embryonic skeletal joint development",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0072498",
      "best_source_term_label": "embryonic skeletal joint development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072498"
      ],
      "supporting_source_term_labels": [
        "embryonic skeletal joint development"
      ],
      "supporting_source_node_names": [
        "Progressive Vertebral and Carpal Joint Fusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072498" } }));
