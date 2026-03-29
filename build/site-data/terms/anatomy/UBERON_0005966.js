window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005966"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005966",
  "term_label": "outflow part of left atrium",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.037037,
  "mean_score": 0.037037,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0005966",
      "term_label": "outflow part of left atrium",
      "score": 0.037037,
      "direct_score": 0.0,
      "propagated_score": 0.037037,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002135",
      "best_source_term_label": "mitral valve",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005966" } }));
