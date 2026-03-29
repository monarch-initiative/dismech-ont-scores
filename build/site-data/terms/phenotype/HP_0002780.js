window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002780"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002780",
  "term_label": "Bronchomalacia",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "HP:0002780",
      "term_label": "Bronchomalacia",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0002786",
      "best_source_term_label": "Tracheobronchomalacia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002786"
      ],
      "supporting_source_term_labels": [
        "Tracheobronchomalacia"
      ],
      "supporting_source_node_names": [
        "Tracheobronchomalacia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002780" } }));
