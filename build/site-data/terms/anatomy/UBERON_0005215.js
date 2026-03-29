window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005215"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005215",
  "term_label": "kidney interstitium",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.327869,
  "mean_score": 0.275131,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Nephronophthisis",
      "disease_term_id": "MONDO:0019005",
      "source_file": "Nephronophthisis.yaml",
      "term_id": "UBERON:0005215",
      "term_label": "kidney interstitium",
      "score": 0.327869,
      "direct_score": 0.327869,
      "propagated_score": 0.327869,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0005215",
      "best_source_term_label": "kidney interstitium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005215"
      ],
      "supporting_source_term_labels": [
        "kidney interstitium"
      ],
      "supporting_source_node_names": [
        "Interstitial Fibrosis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0005215",
      "term_label": "kidney interstitium",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002320",
      "best_source_term_label": "glomerular mesangium",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005215" } }));
