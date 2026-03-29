window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012440"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012440",
  "term_label": "Abnormal biliary tract morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0012440",
      "term_label": "Abnormal biliary tract morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002613",
      "best_source_term_label": "Biliary cirrhosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002613"
      ],
      "supporting_source_term_labels": [
        "Biliary cirrhosis"
      ],
      "supporting_source_node_names": [
        "Focal Biliary Cirrhosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "IgG4-Related Disease",
      "disease_term_id": "MONDO:0017287",
      "source_file": "IgG4-Related_Disease.yaml",
      "term_id": "HP:0012440",
      "term_label": "Abnormal biliary tract morphology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0030991",
      "best_source_term_label": "Sclerosing cholangitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030991"
      ],
      "supporting_source_term_labels": [
        "Sclerosing cholangitis"
      ],
      "supporting_source_node_names": [
        "Sclerosing Cholangitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012440" } }));
