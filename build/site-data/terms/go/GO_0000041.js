window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000041"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000041",
  "term_label": "transition metal ion transport",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.285851,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Menkes Disease",
      "disease_term_id": "MONDO:0010651",
      "source_file": "Menkes_Disease.yaml",
      "term_id": "GO:0000041",
      "term_label": "transition metal ion transport",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0006825",
      "best_source_term_label": "copper ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006825"
      ],
      "supporting_source_term_labels": [
        "copper ion transport"
      ],
      "supporting_source_node_names": [
        "ATP7A-mediated copper export failure"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "GO:0000041",
      "term_label": "transition metal ion transport",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0006825",
      "best_source_term_label": "copper ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006825"
      ],
      "supporting_source_term_labels": [
        "copper ion transport"
      ],
      "supporting_source_node_names": [
        "Impaired Biliary Copper Excretion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "GO:0000041",
      "term_label": "transition metal ion transport",
      "score": 0.148717,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0006826",
      "best_source_term_label": "iron ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0000041",
      "term_label": "transition metal ion transport",
      "score": 0.13325,
      "direct_score": 0.0,
      "propagated_score": 0.1792,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0006826",
      "best_source_term_label": "iron ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0000041",
      "term_label": "transition metal ion transport",
      "score": 0.10627,
      "direct_score": 0.0,
      "propagated_score": 0.142917,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:1903988",
      "best_source_term_label": "iron ion export across plasma membrane",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000041" } }));
