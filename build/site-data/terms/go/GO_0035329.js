window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035329"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035329",
  "term_label": "hippo signaling",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Malignant Mesothelioma",
      "disease_term_id": "MONDO:0006292",
      "source_file": "Malignant_Mesothelioma.yaml",
      "term_id": "GO:0035329",
      "term_label": "hippo signaling",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0035329",
      "best_source_term_label": "hippo signaling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035329"
      ],
      "supporting_source_term_labels": [
        "hippo signaling"
      ],
      "supporting_source_node_names": [
        "NF2/Merlin Inactivation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035329" } }));
