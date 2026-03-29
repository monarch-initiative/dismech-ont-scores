window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030301"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030301",
  "term_label": "cholesterol transport",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.533333,
  "mean_score": 0.370449,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tuberculosis",
      "disease_term_id": "MONDO:0018076",
      "source_file": "Tuberculosis.yaml",
      "term_id": "GO:0030301",
      "term_label": "cholesterol transport",
      "score": 0.533333,
      "direct_score": 0.533333,
      "propagated_score": 0.533333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030301",
      "best_source_term_label": "cholesterol transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030301"
      ],
      "supporting_source_term_labels": [
        "cholesterol transport"
      ],
      "supporting_source_node_names": [
        "Granuloma Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "GO:0030301",
      "term_label": "cholesterol transport",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0032367",
      "best_source_term_label": "intracellular cholesterol transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032367"
      ],
      "supporting_source_term_labels": [
        "intracellular cholesterol transport"
      ],
      "supporting_source_node_names": [
        "Impaired Intracellular Cholesterol Trafficking"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030301" } }));
