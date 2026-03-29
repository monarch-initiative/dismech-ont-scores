window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000045"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000045",
  "term_label": "ganglion",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.188031,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0000045",
      "term_label": "ganglion",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "UBERON:0000045",
      "term_label": "ganglion",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000044",
      "best_source_term_label": "dorsal root ganglion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000044"
      ],
      "supporting_source_term_labels": [
        "dorsal root ganglion"
      ],
      "supporting_source_node_names": [
        "Establishment of latency in sensory ganglia"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "UBERON:0000045",
      "term_label": "ganglion",
      "score": 0.064928,
      "direct_score": 0.0,
      "propagated_score": 0.083333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001700",
      "best_source_term_label": "geniculate ganglion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001700"
      ],
      "supporting_source_term_labels": [
        "geniculate ganglion"
      ],
      "supporting_source_node_names": [
        "Putative post-viral immune activation in the geniculate ganglion"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0000045",
      "term_label": "ganglion",
      "score": 0.061084,
      "direct_score": 0.0,
      "propagated_score": 0.0784,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000045" } }));
