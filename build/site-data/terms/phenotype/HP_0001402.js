window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001402"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001402",
  "term_label": "Hepatocellular carcinoma",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hepatitis C",
      "disease_term_id": "MONDO:0005231",
      "source_file": "Hepatitis_C.yaml",
      "term_id": "HP:0001402",
      "term_label": "Hepatocellular carcinoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001402",
      "best_source_term_label": "Hepatocellular carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001402"
      ],
      "supporting_source_term_labels": [
        "Hepatocellular carcinoma"
      ],
      "supporting_source_node_names": [
        "Hepatocellular Carcinoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "HP:0001402",
      "term_label": "Hepatocellular carcinoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001402",
      "best_source_term_label": "Hepatocellular carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001402"
      ],
      "supporting_source_term_labels": [
        "Hepatocellular carcinoma"
      ],
      "supporting_source_node_names": [
        "Hepatocellular carcinoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001402" } }));
