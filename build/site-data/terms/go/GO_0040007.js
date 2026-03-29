window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0040007"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0040007",
  "term_label": "growth",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.27188,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "GO:0040007",
      "term_label": "growth",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0016049",
      "best_source_term_label": "cell growth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016049"
      ],
      "supporting_source_term_labels": [
        "cell growth"
      ],
      "supporting_source_node_names": [
        "TSC1/TSC2 Loss of Function and mTOR Hyperactivation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "GO:0040007",
      "term_label": "growth",
      "score": 0.188643,
      "direct_score": 0.0,
      "propagated_score": 0.228667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1990399",
      "best_source_term_label": "epithelium regeneration",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1990399"
      ],
      "supporting_source_term_labels": [
        "epithelium regeneration"
      ],
      "supporting_source_node_names": [
        "Iron and heme-driven oxidative injury and chronic remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "GO:0040007",
      "term_label": "growth",
      "score": 0.049519,
      "direct_score": 0.0,
      "propagated_score": 0.060025,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003418",
      "best_source_term_label": "growth plate cartilage chondrocyte differentiation",
      "best_source_path_score": 0.060025,
      "best_source_path": "part_of > part_of > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0040007" } }));
