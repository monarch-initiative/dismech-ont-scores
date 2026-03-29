window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002318"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002318",
  "term_label": "white matter of spinal cord",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.142857,
  "mean_score": 0.142857,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "UBERON:0002318",
      "term_label": "white matter of spinal cord",
      "score": 0.142857,
      "direct_score": 0.142857,
      "propagated_score": 0.142857,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002318",
      "best_source_term_label": "white matter of spinal cord",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002318"
      ],
      "supporting_source_term_labels": [
        "white matter of spinal cord"
      ],
      "supporting_source_node_names": [
        "Demyelination"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002318" } }));
