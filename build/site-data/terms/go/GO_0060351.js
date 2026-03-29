window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060351"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060351",
  "term_label": "cartilage development involved in endochondral bone morphogenesis",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.322341,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achondrogenesis Type II",
      "disease_term_id": "MONDO:0008702",
      "source_file": "Achondrogenesis_Type_II.yaml",
      "term_id": "GO:0060351",
      "term_label": "cartilage development involved in endochondral bone morphogenesis",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060351",
      "best_source_term_label": "cartilage development involved in endochondral bone morphogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060351"
      ],
      "supporting_source_term_labels": [
        "cartilage development involved in endochondral bone morphogenesis"
      ],
      "supporting_source_node_names": [
        "Type II Collagen Structural Defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "GO:0060351",
      "term_label": "cartilage development involved in endochondral bone morphogenesis",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003418",
      "best_source_term_label": "growth plate cartilage chondrocyte differentiation",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060351" } }));
