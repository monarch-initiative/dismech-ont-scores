window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0034769"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0034769",
  "term_label": "lymphomyeloid tissue",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.16807,
  "mean_score": 0.16807,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Tonsillar_Lymphoma",
      "disease_term_id": "MONDO:0044884",
      "source_file": "Primary_Tonsillar_Lymphoma.yaml",
      "term_id": "UBERON:0034769",
      "term_label": "lymphomyeloid tissue",
      "score": 0.16807,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002373",
      "best_source_term_label": "palatine tonsil",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0034769" } }));
