window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003107"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003107",
  "term_label": "Abnormal circulating cholesterol concentration",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.564141,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0003107",
      "term_label": "Abnormal circulating cholesterol concentration",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0003124",
      "best_source_term_label": "Hypercholesterolemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003124"
      ],
      "supporting_source_term_labels": [
        "Hypercholesterolemia"
      ],
      "supporting_source_node_names": [
        "Hypercholesterolemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0003107",
      "term_label": "Abnormal circulating cholesterol concentration",
      "score": 0.505586,
      "direct_score": 0.0,
      "propagated_score": 0.568351,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0003233",
      "best_source_term_label": "Decreased HDL cholesterol concentration",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003107" } }));
