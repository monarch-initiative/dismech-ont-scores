window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011138"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011138",
  "term_label": "postcranial axial skeletal system",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.125,
  "mean_score": 0.125,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Kummell Disease",
      "disease_term_id": "MONDO:0003940",
      "source_file": "Kummell_Disease.yaml",
      "term_id": "UBERON:0011138",
      "term_label": "postcranial axial skeletal system",
      "score": 0.125,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001075",
      "best_source_term_label": "bony vertebral centrum",
      "best_source_path_score": 0.125,
      "best_source_path": "part_of > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "UBERON:0001075"
      ],
      "supporting_source_term_labels": [
        "bony vertebral centrum"
      ],
      "supporting_source_node_names": [
        "Basivertebral foramen microcirculation compromise",
        "Vertebral body avascular necrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011138" } }));
