window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001258"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001258",
  "term_label": "Spastic paraplegia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "HP:0001258",
      "term_label": "Spastic paraplegia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001258",
      "best_source_term_label": "Spastic paraplegia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001258"
      ],
      "supporting_source_term_labels": [
        "Spastic paraplegia"
      ],
      "supporting_source_node_names": [
        "Spastic paraplegia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "HP:0001258",
      "term_label": "Spastic paraplegia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001258",
      "best_source_term_label": "Spastic paraplegia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001258"
      ],
      "supporting_source_term_labels": [
        "Spastic paraplegia"
      ],
      "supporting_source_node_names": [
        "Spastic paraplegia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001258" } }));
