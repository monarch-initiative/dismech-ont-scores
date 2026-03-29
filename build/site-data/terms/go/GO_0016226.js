window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0016226"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0016226",
  "term_label": "iron-sulfur cluster assembly",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Friedreich Ataxia",
      "disease_term_id": "MONDO:0100339",
      "source_file": "Friedreich_Ataxia.yaml",
      "term_id": "GO:0016226",
      "term_label": "iron-sulfur cluster assembly",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0016226",
      "best_source_term_label": "iron-sulfur cluster assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016226"
      ],
      "supporting_source_term_labels": [
        "iron-sulfur cluster assembly"
      ],
      "supporting_source_node_names": [
        "Frataxin Deficiency and Iron-Sulfur Cluster Assembly Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0016226" } }));
