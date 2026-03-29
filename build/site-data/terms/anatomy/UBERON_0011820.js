window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011820"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011820",
  "term_label": "atrioventricular region",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.025926,
  "mean_score": 0.025926,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0011820",
      "term_label": "atrioventricular region",
      "score": 0.025926,
      "direct_score": 0.0,
      "propagated_score": 0.025926,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002135",
      "best_source_term_label": "mitral valve",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011820" } }));
