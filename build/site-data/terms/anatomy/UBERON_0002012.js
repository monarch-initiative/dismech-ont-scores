window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002012"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002012",
  "term_label": "pulmonary artery",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0002012",
      "term_label": "pulmonary artery",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002012",
      "best_source_term_label": "pulmonary artery",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002012"
      ],
      "supporting_source_term_labels": [
        "pulmonary artery"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction",
        "Increased Pulmonary Vascular Resistance",
        "Inflammation and Immune Activation",
        "Vascular Remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002012" } }));
