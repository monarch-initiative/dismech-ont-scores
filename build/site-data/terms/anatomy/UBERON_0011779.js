window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011779"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011779",
  "term_label": "nerve of head region",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.261533,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "UBERON:0011779",
      "term_label": "nerve of head region",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001647",
      "best_source_term_label": "facial nerve",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0011779",
      "term_label": "nerve of head region",
      "score": 0.087178,
      "direct_score": 0.0,
      "propagated_score": 0.098,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001645",
      "best_source_term_label": "trigeminal nerve",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011779" } }));
