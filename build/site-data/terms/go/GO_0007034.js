window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007034"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007034",
  "term_label": "vacuolar transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.415131,
  "mean_score": 0.36324,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:0007034",
      "term_label": "vacuolar transport",
      "score": 0.415131,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007041",
      "best_source_term_label": "lysosomal transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007041"
      ],
      "supporting_source_term_labels": [
        "lysosomal transport"
      ],
      "supporting_source_node_names": [
        "Autophagy-Lysosomal Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Mucopolysaccharidosis",
      "disease_term_id": "MONDO:0019249",
      "source_file": "Mucopolysaccharidosis.yaml",
      "term_id": "GO:0007034",
      "term_label": "vacuolar transport",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007041",
      "best_source_term_label": "lysosomal transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007041"
      ],
      "supporting_source_term_labels": [
        "lysosomal transport"
      ],
      "supporting_source_node_names": [
        "Lysosomal GAG Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007034" } }));
