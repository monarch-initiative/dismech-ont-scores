window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0035554"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0035554",
  "term_label": "right cardiac chamber",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.175,
  "mean_score": 0.175,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0035554",
      "term_label": "right cardiac chamber",
      "score": 0.175,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002080",
      "best_source_term_label": "heart right ventricle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002080"
      ],
      "supporting_source_term_labels": [
        "heart right ventricle"
      ],
      "supporting_source_node_names": [
        "Right Ventricular Hypertrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0035554" } }));
