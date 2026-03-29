window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002144"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002144",
  "term_label": "capillary endothelial cell",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.468223,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "CL:0002144",
      "term_label": "capillary endothelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0002144",
      "best_source_term_label": "capillary endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002144"
      ],
      "supporting_source_term_labels": [
        "capillary endothelial cell"
      ],
      "supporting_source_node_names": [
        "Subepithelial collagen deposition and fibrotic remodeling"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "CL:0002144",
      "term_label": "capillary endothelial cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0002144",
      "best_source_term_label": "capillary endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002144"
      ],
      "supporting_source_term_labels": [
        "capillary endothelial cell"
      ],
      "supporting_source_node_names": [
        "Immune-mediated increase in pulmonary capillary permeability"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "CL:0002144",
      "term_label": "capillary endothelial cell",
      "score": 0.071335,
      "direct_score": 0.0,
      "propagated_score": 0.086471,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:1001033",
      "best_source_term_label": "peritubular capillary endothelial cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1001033"
      ],
      "supporting_source_term_labels": [
        "peritubular capillary endothelial cell"
      ],
      "supporting_source_node_names": [
        "Ischemic Tubular Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002144" } }));
