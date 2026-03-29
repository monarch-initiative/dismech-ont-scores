window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002135"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002135",
  "term_label": "mitral valve",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.074074,
  "mean_score": 0.074074,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0002135",
      "term_label": "mitral valve",
      "score": 0.074074,
      "direct_score": 0.074074,
      "propagated_score": 0.074074,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002135",
      "best_source_term_label": "mitral valve",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002135"
      ],
      "supporting_source_term_labels": [
        "mitral valve"
      ],
      "supporting_source_node_names": [
        "Left Ventricular Outflow Tract Obstruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002135" } }));
