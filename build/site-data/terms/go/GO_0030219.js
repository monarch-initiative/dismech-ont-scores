window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030219"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030219",
  "term_label": "megakaryocyte differentiation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Essential Thrombocythemia",
      "disease_term_id": "MONDO:0005029",
      "source_file": "Essential_Thrombocythemia.yaml",
      "term_id": "GO:0030219",
      "term_label": "megakaryocyte differentiation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030219",
      "best_source_term_label": "megakaryocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030219"
      ],
      "supporting_source_term_labels": [
        "megakaryocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Enhanced Megakaryopoiesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Myelofibrosis",
      "disease_term_id": "MONDO:0009692",
      "source_file": "Primary_Myelofibrosis.yaml",
      "term_id": "GO:0030219",
      "term_label": "megakaryocyte differentiation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030219",
      "best_source_term_label": "megakaryocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030219"
      ],
      "supporting_source_term_labels": [
        "megakaryocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Abnormal Megakaryopoiesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030219" } }));
