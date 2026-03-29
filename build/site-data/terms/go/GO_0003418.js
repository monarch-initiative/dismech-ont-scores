window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003418"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003418",
  "term_label": "growth plate cartilage chondrocyte differentiation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "GO:0003418",
      "term_label": "growth plate cartilage chondrocyte differentiation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0003418",
      "best_source_term_label": "growth plate cartilage chondrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003418" } }));
