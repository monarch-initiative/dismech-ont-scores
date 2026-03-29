window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004440"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004440",
  "term_label": "Coronal craniosynostosis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.631072,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Muenke Syndrome",
      "disease_term_id": "MONDO:0011274",
      "source_file": "Muenke_Syndrome.yaml",
      "term_id": "HP:0004440",
      "term_label": "Coronal craniosynostosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0004440",
      "best_source_term_label": "Coronal craniosynostosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004440"
      ],
      "supporting_source_term_labels": [
        "Coronal craniosynostosis"
      ],
      "supporting_source_node_names": [
        "Coronal Craniosynostosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Apert Syndrome",
      "disease_term_id": "MONDO:0007041",
      "source_file": "Apert_Syndrome.yaml",
      "term_id": "HP:0004440",
      "term_label": "Coronal craniosynostosis",
      "score": 0.262144,
      "direct_score": 0.262144,
      "propagated_score": 0.262144,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0004440",
      "best_source_term_label": "Coronal craniosynostosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004440"
      ],
      "supporting_source_term_labels": [
        "Coronal craniosynostosis"
      ],
      "supporting_source_node_names": [
        "Coronal Craniosynostosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004440" } }));
