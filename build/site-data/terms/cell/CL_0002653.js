window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002653"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002653",
  "term_label": "squamous endothelial cell",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.273302,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "CL:0002653",
      "term_label": "squamous endothelial cell",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002144",
      "best_source_term_label": "capillary endothelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "CL:0002653",
      "term_label": "squamous endothelial cell",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002144",
      "best_source_term_label": "capillary endothelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "CL:0002653",
      "term_label": "squamous endothelial cell",
      "score": 0.049935,
      "direct_score": 0.0,
      "propagated_score": 0.060529,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:1001033",
      "best_source_term_label": "peritubular capillary endothelial cell",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002653" } }));
