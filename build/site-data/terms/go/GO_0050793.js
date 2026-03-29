window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050793"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050793",
  "term_label": "regulation of developmental process",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.364356,
  "mean_score": 0.121746,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Heart Failure",
      "disease_term_id": "MONDO:0005252",
      "source_file": "Heart_Failure.yaml",
      "term_id": "GO:0050793",
      "term_label": "regulation of developmental process",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0060420",
      "best_source_term_label": "regulation of heart growth",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060420"
      ],
      "supporting_source_term_labels": [
        "regulation of heart growth"
      ],
      "supporting_source_node_names": [
        "Ventricular Remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 1",
      "disease_term_id": "MONDO:0008546",
      "source_file": "Thanatophoric_Dysplasia_Type_1.yaml",
      "term_id": "GO:0050793",
      "term_label": "regulation of developmental process",
      "score": 0.085016,
      "direct_score": 0.0,
      "propagated_score": 0.114333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032331"
      ],
      "supporting_source_term_labels": [
        "negative regulation of chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Severe FGFR3 gain-of-function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 2",
      "disease_term_id": "MONDO:0008547",
      "source_file": "Thanatophoric_Dysplasia_Type_2.yaml",
      "term_id": "GO:0050793",
      "term_label": "regulation of developmental process",
      "score": 0.085016,
      "direct_score": 0.0,
      "propagated_score": 0.114333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032331"
      ],
      "supporting_source_term_labels": [
        "negative regulation of chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Severe FGFR3 gain-of-function (K650E)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0050793",
      "term_label": "regulation of developmental process",
      "score": 0.054653,
      "direct_score": 0.0,
      "propagated_score": 0.0735,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0008360",
      "best_source_term_label": "regulation of cell shape",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008360"
      ],
      "supporting_source_term_labels": [
        "regulation of cell shape"
      ],
      "supporting_source_node_names": [
        "Actin-based motility and cell-to-cell spread"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0050793",
      "term_label": "regulation of developmental process",
      "score": 0.019688,
      "direct_score": 0.0,
      "propagated_score": 0.026477,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0045580",
      "best_source_term_label": "regulation of T cell differentiation",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045580"
      ],
      "supporting_source_term_labels": [
        "regulation of T cell differentiation"
      ],
      "supporting_source_node_names": [
        "Dendritic-cell and T-cell adaptive immune phase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050793" } }));
