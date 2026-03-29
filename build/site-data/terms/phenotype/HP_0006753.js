window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006753"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006753",
  "term_label": "Neoplasm of the stomach",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.438877,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "HP:0006753",
      "term_label": "Neoplasm of the stomach",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012126",
      "best_source_term_label": "Stomach cancer",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012126"
      ],
      "supporting_source_term_labels": [
        "Stomach cancer"
      ],
      "supporting_source_node_names": [
        "Stomach Cancer"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Juvenile Polyposis Syndrome",
      "disease_term_id": "MONDO:0017380",
      "source_file": "Juvenile_Polyposis_Syndrome.yaml",
      "term_id": "HP:0006753",
      "term_label": "Neoplasm of the stomach",
      "score": 0.255057,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012126",
      "best_source_term_label": "Stomach cancer",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012126"
      ],
      "supporting_source_term_labels": [
        "Stomach cancer"
      ],
      "supporting_source_node_names": [
        "Stomach cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006753" } }));
