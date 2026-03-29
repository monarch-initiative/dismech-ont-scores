window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006706"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006706",
  "term_label": "Cystic liver disease",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.577478,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic echinococcosis",
      "disease_term_id": "MONDO:0018408",
      "source_file": "Cystic_Echinococcosis.yaml",
      "term_id": "HP:0006706",
      "term_label": "Cystic liver disease",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001407",
      "best_source_term_label": "Hepatic cysts",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001407"
      ],
      "supporting_source_term_labels": [
        "Hepatic cysts"
      ],
      "supporting_source_node_names": [
        "Hepatic cysts"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic echinococcosis",
      "disease_term_id": "MONDO:0000288",
      "source_file": "Polycystic_Echinococcosis.yaml",
      "term_id": "HP:0006706",
      "term_label": "Cystic liver disease",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001407",
      "best_source_term_label": "Hepatic cysts",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001407"
      ],
      "supporting_source_term_labels": [
        "Hepatic cysts"
      ],
      "supporting_source_node_names": [
        "Polycystic hepatic lesion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic Kidney Disease",
      "disease_term_id": "MONDO:0020642",
      "source_file": "Polycystic_Kidney_Disease.yaml",
      "term_id": "HP:0006706",
      "term_label": "Cystic liver disease",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001407",
      "best_source_term_label": "Hepatic cysts",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001407"
      ],
      "supporting_source_term_labels": [
        "Hepatic cysts"
      ],
      "supporting_source_node_names": [
        "Hepatic Cysts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006706" } }));
