window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0080164"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0080164",
  "term_label": "regulation of nitric oxide metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hypertensive Heart Disease",
      "disease_term_id": "MONDO:0001302",
      "source_file": "Hypertensive_Heart_Disease.yaml",
      "term_id": "GO:0080164",
      "term_label": "regulation of nitric oxide metabolic process",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0045428",
      "best_source_term_label": "regulation of nitric oxide biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045428"
      ],
      "supporting_source_term_labels": [
        "regulation of nitric oxide biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Coronary Microvascular Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0080164" } }));
