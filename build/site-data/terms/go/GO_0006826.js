window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006826"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006826",
  "term_label": "iron ion transport",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.285714,
  "mean_score": 0.236715,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "GO:0006826",
      "term_label": "iron ion transport",
      "score": 0.285714,
      "direct_score": 0.285714,
      "propagated_score": 0.285714,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006826",
      "best_source_term_label": "iron ion transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006826"
      ],
      "supporting_source_term_labels": [
        "iron ion transport"
      ],
      "supporting_source_node_names": [
        "Iron Overload"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "GO:0006826",
      "term_label": "iron ion transport",
      "score": 0.256,
      "direct_score": 0.256,
      "propagated_score": 0.256,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006826",
      "best_source_term_label": "iron ion transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006826"
      ],
      "supporting_source_term_labels": [
        "iron ion transport"
      ],
      "supporting_source_node_names": [
        "Iron Overload"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0006826",
      "term_label": "iron ion transport",
      "score": 0.168431,
      "direct_score": 0.0,
      "propagated_score": 0.204167,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1903988",
      "best_source_term_label": "iron ion export across plasma membrane",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1903988"
      ],
      "supporting_source_term_labels": [
        "iron ion export across plasma membrane"
      ],
      "supporting_source_node_names": [
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006826" } }));
