window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042359"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042359",
  "term_label": "vitamin D metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.711111,
  "mean_score": 0.605556,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "GO:0042359",
      "term_label": "vitamin D metabolic process",
      "score": 0.711111,
      "direct_score": 0.711111,
      "propagated_score": 0.711111,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042359",
      "best_source_term_label": "vitamin D metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042359"
      ],
      "supporting_source_term_labels": [
        "vitamin D metabolic process"
      ],
      "supporting_source_node_names": [
        "Calcitriol Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "X-Linked Hypophosphatemia",
      "disease_term_id": "MONDO:0010619",
      "source_file": "X-Linked_Hypophosphatemia.yaml",
      "term_id": "GO:0042359",
      "term_label": "vitamin D metabolic process",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042359",
      "best_source_term_label": "vitamin D metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042359"
      ],
      "supporting_source_term_labels": [
        "vitamin D metabolic process"
      ],
      "supporting_source_node_names": [
        "Renal Phosphate Wasting via FGF23 Excess"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042359" } }));
