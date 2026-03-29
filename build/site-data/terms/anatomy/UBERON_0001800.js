window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001800"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001800",
  "term_label": "sensory ganglion",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.268616,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0001800",
      "term_label": "sensory ganglion",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "UBERON:0001800",
      "term_label": "sensory ganglion",
      "score": 0.349052,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000044",
      "best_source_term_label": "dorsal root ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "UBERON:0001800",
      "term_label": "sensory ganglion",
      "score": 0.092754,
      "direct_score": 0.0,
      "propagated_score": 0.119048,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001700",
      "best_source_term_label": "geniculate ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "UBERON:0001800",
      "term_label": "sensory ganglion",
      "score": 0.087263,
      "direct_score": 0.0,
      "propagated_score": 0.112,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001675",
      "best_source_term_label": "trigeminal ganglion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001800" } }));
