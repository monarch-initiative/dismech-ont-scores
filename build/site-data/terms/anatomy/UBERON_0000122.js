window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000122"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000122",
  "term_label": "neuron projection bundle",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.255049,
  "mean_score": 0.132631,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "UBERON:0000122",
      "term_label": "neuron projection bundle",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001647",
      "best_source_term_label": "facial nerve",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001647"
      ],
      "supporting_source_term_labels": [
        "facial nerve"
      ],
      "supporting_source_node_names": [
        "Facial nerve edema within the facial canal",
        "Incomplete recovery with aberrant reinnervation",
        "Intracanalicular compression and conduction block of cranial nerve VII",
        "Putative post-viral immune activation in the geniculate ganglion"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "UBERON:0000122",
      "term_label": "neuron projection bundle",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000941",
      "best_source_term_label": "cranial nerve II",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000941"
      ],
      "supporting_source_term_labels": [
        "cranial nerve II"
      ],
      "supporting_source_node_names": [
        "Optic Nerve Degeneration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "UBERON:0000122",
      "term_label": "neuron projection bundle",
      "score": 0.130046,
      "direct_score": 0.0,
      "propagated_score": 0.174891,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001021",
      "best_source_term_label": "nerve",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001021"
      ],
      "supporting_source_term_labels": [
        "nerve"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Axonopathy"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0000122",
      "term_label": "neuron projection bundle",
      "score": 0.05101,
      "direct_score": 0.0,
      "propagated_score": 0.0686,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001645",
      "best_source_term_label": "trigeminal nerve",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001645"
      ],
      "supporting_source_term_labels": [
        "trigeminal nerve"
      ],
      "supporting_source_node_names": [
        "Optic-Trigeminal Cross-Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "UBERON:0000122",
      "term_label": "neuron projection bundle",
      "score": 0.044871,
      "direct_score": 0.0,
      "propagated_score": 0.060345,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001021",
      "best_source_term_label": "nerve",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001021"
      ],
      "supporting_source_term_labels": [
        "nerve"
      ],
      "supporting_source_node_names": [
        "Neural microvascular injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000122" } }));
