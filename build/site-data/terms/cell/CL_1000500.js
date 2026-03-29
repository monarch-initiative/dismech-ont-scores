window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1000500"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1000500",
  "term_label": "kidney interstitial cell",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.461982,
  "mean_score": 0.311385,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Nephronophthisis",
      "disease_term_id": "MONDO:0019005",
      "source_file": "Nephronophthisis.yaml",
      "term_id": "CL:1000500",
      "term_label": "kidney interstitial cell",
      "score": 0.461982,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:1000692",
      "best_source_term_label": "kidney interstitial fibroblast",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000692"
      ],
      "supporting_source_term_labels": [
        "kidney interstitial fibroblast"
      ],
      "supporting_source_node_names": [
        "Interstitial Fibrosis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "CL:1000500",
      "term_label": "kidney interstitial cell",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000650",
      "best_source_term_label": "mesangial cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000650"
      ],
      "supporting_source_term_labels": [
        "mesangial cell"
      ],
      "supporting_source_node_names": [
        "Mesangial Cell Activation and Proliferation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "CL:1000500",
      "term_label": "kidney interstitial cell",
      "score": 0.067939,
      "direct_score": 0.0,
      "propagated_score": 0.082353,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:1000698",
      "best_source_term_label": "kidney resident macrophage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000698"
      ],
      "supporting_source_term_labels": [
        "kidney resident macrophage"
      ],
      "supporting_source_node_names": [
        "Sepsis-Associated AKI"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1000500" } }));
