window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003417"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003417",
  "term_label": "growth plate cartilage development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "GO:0003417",
      "term_label": "growth plate cartilage development",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0003418",
      "best_source_term_label": "growth plate cartilage chondrocyte differentiation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003418"
      ],
      "supporting_source_term_labels": [
        "growth plate cartilage chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Impaired growth plate cartilage development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003417" } }));
