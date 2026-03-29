window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006544"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006544",
  "term_label": "kidney vasculature",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.322341,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "UBERON:0006544",
      "term_label": "kidney vasculature",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0006544",
      "best_source_term_label": "kidney vasculature",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0006544"
      ],
      "supporting_source_term_labels": [
        "kidney vasculature"
      ],
      "supporting_source_node_names": [
        "Sepsis-Associated AKI"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0006544",
      "term_label": "kidney vasculature",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002320",
      "best_source_term_label": "glomerular mesangium",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002320"
      ],
      "supporting_source_term_labels": [
        "glomerular mesangium"
      ],
      "supporting_source_node_names": [
        "Anti-Gd-IgA1 Autoantibody Formation",
        "Mesangial Cell Activation and Proliferation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006544" } }));
