window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006527"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006527",
  "term_label": "L-arginine catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arginase Deficiency",
      "disease_term_id": "MONDO:0008814",
      "source_file": "Arginase_Deficiency.yaml",
      "term_id": "GO:0006527",
      "term_label": "L-arginine catabolic process",
      "score": 0.625,
      "direct_score": 0.625,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006527",
      "best_source_term_label": "L-arginine catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006527"
      ],
      "supporting_source_term_labels": [
        "L-arginine catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired ureagenesis and hyperargininemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006527" } }));
