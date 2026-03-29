window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1903409"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1903409",
  "term_label": "reactive oxygen species biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:1903409",
      "term_label": "reactive oxygen species biosynthetic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:1903409",
      "best_source_term_label": "reactive oxygen species biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1903409"
      ],
      "supporting_source_term_labels": [
        "reactive oxygen species biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Oxidative Stress"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "GO:1903409",
      "term_label": "reactive oxygen species biosynthetic process",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:1903409",
      "best_source_term_label": "reactive oxygen species biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1903409"
      ],
      "supporting_source_term_labels": [
        "reactive oxygen species biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reactive Oxygen Species Generation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1903409" } }));
