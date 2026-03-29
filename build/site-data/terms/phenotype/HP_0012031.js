window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012031"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012031",
  "term_label": "Lipomatous tumor",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.639136,
  "mean_score": 0.630916,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0012031",
      "term_label": "Lipomatous tumor",
      "score": 0.639136,
      "direct_score": 0.0,
      "propagated_score": 0.71848,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025476",
      "best_source_term_label": "Testicular lipomatosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001012",
        "HP:0025476"
      ],
      "supporting_source_term_labels": [
        "Multiple lipomas",
        "Testicular lipomatosis"
      ],
      "supporting_source_node_names": [
        "Lipomatous Overgrowth",
        "Testicular Lipomatosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0012031",
      "term_label": "Lipomatous tumor",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012032",
      "best_source_term_label": "Lipoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012032"
      ],
      "supporting_source_term_labels": [
        "Lipoma"
      ],
      "supporting_source_node_names": [
        "Lipoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012031" } }));
