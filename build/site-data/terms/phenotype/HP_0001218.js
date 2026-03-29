window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001218"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001218",
  "term_label": "Autoamputation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ainhum",
      "disease_term_id": "MONDO:0007074",
      "source_file": "Ainhum.yaml",
      "term_id": "HP:0001218",
      "term_label": "Autoamputation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007460",
      "best_source_term_label": "Autoamputation of digits",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007460"
      ],
      "supporting_source_term_labels": [
        "Autoamputation of digits"
      ],
      "supporting_source_node_names": [
        "Autoamputation of digits"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "HP:0001218",
      "term_label": "Autoamputation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007460",
      "best_source_term_label": "Autoamputation of digits",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007460"
      ],
      "supporting_source_term_labels": [
        "Autoamputation of digits"
      ],
      "supporting_source_node_names": [
        "Pseudoainhum"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001218" } }));
