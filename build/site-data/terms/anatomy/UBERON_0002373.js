window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002373"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002373",
  "term_label": "palatine tonsil",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Tonsillar_Lymphoma",
      "disease_term_id": "MONDO:0044884",
      "source_file": "Primary_Tonsillar_Lymphoma.yaml",
      "term_id": "UBERON:0002373",
      "term_label": "palatine tonsil",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002373",
      "best_source_term_label": "palatine tonsil",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002373"
      ],
      "supporting_source_term_labels": [
        "palatine tonsil"
      ],
      "supporting_source_node_names": [
        "Double/Triple-hit High-grade B-cell Lymphoma",
        "EBV-positive Diffuse Large B-cell Lymphoma",
        "IRF4-rearranged Large B-cell Lymphoma",
        "Malignant B-cell Proliferation (Activated B-cell Type)",
        "Malignant B-cell Proliferation (Germinal Center Type)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002373" } }));
