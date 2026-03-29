window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006874"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006874",
  "term_label": "intracellular calcium ion homeostasis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.666667,
  "mean_score": 0.633333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "GO:0006874",
      "term_label": "intracellular calcium ion homeostasis",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006874",
      "best_source_term_label": "intracellular calcium ion homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006874"
      ],
      "supporting_source_term_labels": [
        "intracellular calcium ion homeostasis"
      ],
      "supporting_source_node_names": [
        "Lysosomal Calcium Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0006874",
      "term_label": "intracellular calcium ion homeostasis",
      "score": 0.6,
      "direct_score": 0.6,
      "propagated_score": 0.6,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006874",
      "best_source_term_label": "intracellular calcium ion homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006874"
      ],
      "supporting_source_term_labels": [
        "intracellular calcium ion homeostasis"
      ],
      "supporting_source_node_names": [
        "Mitochondrial depletion and oxidative metabolism deficiency in cores"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006874" } }));
