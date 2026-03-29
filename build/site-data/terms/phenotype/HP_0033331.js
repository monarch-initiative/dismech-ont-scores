window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033331"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033331",
  "term_label": "Acute phase response",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.481231,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0033331",
      "term_label": "Acute phase response",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003281",
      "best_source_term_label": "Increased circulating ferritin concentration",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003281"
      ],
      "supporting_source_term_labels": [
        "Increased circulating ferritin concentration"
      ],
      "supporting_source_node_names": [
        "Elevated Serum Ferritin"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "HP:0033331",
      "term_label": "Acute phase response",
      "score": 0.461982,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003281",
      "best_source_term_label": "Increased circulating ferritin concentration",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003281"
      ],
      "supporting_source_term_labels": [
        "Increased circulating ferritin concentration"
      ],
      "supporting_source_node_names": [
        "Iron Overload"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "HP:0033331",
      "term_label": "Acute phase response",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003165",
      "best_source_term_label": "Elevated circulating parathyroid hormone level",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003165"
      ],
      "supporting_source_term_labels": [
        "Elevated circulating parathyroid hormone level"
      ],
      "supporting_source_node_names": [
        "Elevated Parathyroid Hormone"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033331" } }));
