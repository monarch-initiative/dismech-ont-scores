window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010979"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010979",
  "term_label": "Abnormality of lipoprotein cholesterol concentration",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7399,
  "mean_score": 0.7399,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0010979",
      "term_label": "Abnormality of lipoprotein cholesterol concentration",
      "score": 0.7399,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003233",
      "best_source_term_label": "Decreased HDL cholesterol concentration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003141",
        "HP:0003233"
      ],
      "supporting_source_term_labels": [
        "Decreased HDL cholesterol concentration",
        "Increased LDL cholesterol concentration"
      ],
      "supporting_source_node_names": [
        "Decreased HDL Cholesterol",
        "Increased LDL Cholesterol"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010979" } }));
