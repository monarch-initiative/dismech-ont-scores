window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034784"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034784",
  "term_label": "Vasculitis by anatomical site",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.91,
  "mean_score": 0.91,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cogan Syndrome",
      "disease_term_id": "MONDO:0015453",
      "source_file": "Cogan_Syndrome.yaml",
      "term_id": "HP:0034784",
      "term_label": "Vasculitis by anatomical site",
      "score": 0.91,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:6000658",
      "best_source_term_label": "Medium vessel vasculitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005310",
        "HP:6000658"
      ],
      "supporting_source_term_labels": [
        "Large vessel vasculitis",
        "Medium vessel vasculitis"
      ],
      "supporting_source_node_names": [
        "Large vessel vasculitis",
        "Medium vessel vasculitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034784" } }));
