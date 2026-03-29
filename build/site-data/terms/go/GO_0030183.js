window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030183"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030183",
  "term_label": "B cell differentiation",
  "disease_count": 5,
  "direct_disease_count": 4,
  "top_score": 0.8,
  "mean_score": 0.415505,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Philadelphia Chromosome-Positive Acute Lymphoblastic Leukemia",
      "disease_term_id": "MONDO:0004947",
      "source_file": "Ph_Positive_ALL.yaml",
      "term_id": "GO:0030183",
      "term_label": "B cell differentiation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0030183",
      "best_source_term_label": "B cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030183"
      ],
      "supporting_source_term_labels": [
        "B cell differentiation"
      ],
      "supporting_source_node_names": [
        "B-lymphoid Differentiation Block"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0030183",
      "term_label": "B cell differentiation",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0030183",
      "best_source_term_label": "B cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030183"
      ],
      "supporting_source_term_labels": [
        "B cell differentiation"
      ],
      "supporting_source_node_names": [
        "B-cell terminal differentiation defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "GO:0030183",
      "term_label": "B cell differentiation",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0030183",
      "best_source_term_label": "B cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030183"
      ],
      "supporting_source_term_labels": [
        "B cell differentiation"
      ],
      "supporting_source_node_names": [
        "Combined immunodeficiency with lymphocyte depletion and dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "GO:0030183",
      "term_label": "B cell differentiation",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0030183",
      "best_source_term_label": "B cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030183"
      ],
      "supporting_source_term_labels": [
        "B cell differentiation"
      ],
      "supporting_source_node_names": [
        "Age-Associated B Cell Expansion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0030183",
      "term_label": "B cell differentiation",
      "score": 0.127524,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0002317",
      "best_source_term_label": "plasma cell differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002317"
      ],
      "supporting_source_term_labels": [
        "plasma cell differentiation"
      ],
      "supporting_source_node_names": [
        "Autoimmune and IgG4-mediated inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030183" } }));
