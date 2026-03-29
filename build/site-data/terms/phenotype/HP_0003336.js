window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003336"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003336",
  "term_label": "Abnormal enchondral ossification",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343,
  "mean_score": 0.343,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "HP:0003336",
      "term_label": "Abnormal enchondral ossification",
      "score": 0.343,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0006067",
      "best_source_term_label": "Multiple carpal ossification centers",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006067"
      ],
      "supporting_source_term_labels": [
        "Multiple carpal ossification centers"
      ],
      "supporting_source_node_names": [
        "Multiple Carpal Ossification Centers"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003336" } }));
