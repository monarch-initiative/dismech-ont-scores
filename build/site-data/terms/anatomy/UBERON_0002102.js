window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002102"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002102",
  "term_label": "forelimb",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.311349,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "UBERON:0002102",
      "term_label": "forelimb",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002389",
      "best_source_term_label": "manual digit",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002389"
      ],
      "supporting_source_term_labels": [
        "manual digit"
      ],
      "supporting_source_node_names": [
        "Sympathetic Nervous System Dysregulation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "UBERON:0002102",
      "term_label": "forelimb",
      "score": 0.177913,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007722",
      "best_source_term_label": "interphalangeal joint of manus",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0007722"
      ],
      "supporting_source_term_labels": [
        "interphalangeal joint of manus"
      ],
      "supporting_source_node_names": [
        "Joint Contracture"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002102" } }));
