window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001675"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001675",
  "term_label": "trigeminal ganglion",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.58,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0001675",
      "term_label": "trigeminal ganglion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001675"
      ],
      "supporting_source_term_labels": [
        "trigeminal ganglion"
      ],
      "supporting_source_node_names": [
        "Optic-Trigeminal Cross-Activation",
        "Trigeminal Melanopsin Photosensitivity"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0001675",
      "term_label": "trigeminal ganglion",
      "score": 0.16,
      "direct_score": 0.16,
      "propagated_score": 0.16,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001675"
      ],
      "supporting_source_term_labels": [
        "trigeminal ganglion"
      ],
      "supporting_source_node_names": [
        "Trigeminal neurosensory dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001675" } }));
