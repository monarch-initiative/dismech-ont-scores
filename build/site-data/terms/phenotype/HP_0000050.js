window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000050"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000050",
  "term_label": "Hypoplastic male external genitalia",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.753463,
  "mean_score": 0.594676,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "HP:0000050",
      "term_label": "Hypoplastic male external genitalia",
      "score": 0.753463,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008734",
      "best_source_term_label": "Decreased testicular size",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000054",
        "HP:0008734"
      ],
      "supporting_source_term_labels": [
        "Decreased testicular size",
        "Micropenis"
      ],
      "supporting_source_node_names": [
        "Micropenis",
        "Small Testes"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000050",
      "term_label": "Hypoplastic male external genitalia",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000054",
      "best_source_term_label": "Micropenis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000054"
      ],
      "supporting_source_term_labels": [
        "Micropenis"
      ],
      "supporting_source_node_names": [
        "Micropenis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000050" } }));
