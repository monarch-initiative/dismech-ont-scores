window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000957"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000957",
  "term_label": "Cafe-au-lait spot",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.622697,
  "mean_score": 0.516149,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0000957",
      "term_label": "Cafe-au-lait spot",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007565",
      "best_source_term_label": "Multiple cafe-au-lait spots",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007565"
      ],
      "supporting_source_term_labels": [
        "Multiple cafe-au-lait spots"
      ],
      "supporting_source_node_names": [
        "Cafe-au-lait Macules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000957",
      "term_label": "Cafe-au-lait spot",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000957",
      "best_source_term_label": "Cafe-au-lait spot",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000957"
      ],
      "supporting_source_term_labels": [
        "Cafe-au-lait spot"
      ],
      "supporting_source_node_names": [
        "Caf\u00e9-au-Lait Spots"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000957" } }));
