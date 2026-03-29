window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003230"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003230",
  "term_label": "cardiac atrium development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.071429,
  "mean_score": 0.071429,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "GO:0003230",
      "term_label": "cardiac atrium development",
      "score": 0.071429,
      "direct_score": 0.0,
      "propagated_score": 0.071429,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0060413",
      "best_source_term_label": "atrial septum morphogenesis",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0060413"
      ],
      "supporting_source_term_labels": [
        "atrial septum morphogenesis"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003230" } }));
