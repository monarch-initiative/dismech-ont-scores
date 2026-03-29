window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001075"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001075",
  "term_label": "bony vertebral centrum",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Kummell Disease",
      "disease_term_id": "MONDO:0003940",
      "source_file": "Kummell_Disease.yaml",
      "term_id": "UBERON:0001075",
      "term_label": "bony vertebral centrum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001075",
      "best_source_term_label": "bony vertebral centrum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001075" } }));
