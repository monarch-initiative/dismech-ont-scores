window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003170"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003170",
  "term_label": "heart valve development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.16,
  "mean_score": 0.16,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "GO:0003170",
      "term_label": "heart valve development",
      "score": 0.16,
      "direct_score": 0.0,
      "propagated_score": 0.16,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0003179",
      "best_source_term_label": "heart valve morphogenesis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003179"
      ],
      "supporting_source_term_labels": [
        "heart valve morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac Valve Morphogenesis Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003170" } }));
