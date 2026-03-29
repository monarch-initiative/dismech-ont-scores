window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003281"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003281",
  "term_label": "Increased circulating ferritin concentration",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0003281",
      "term_label": "Increased circulating ferritin concentration",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003281",
      "best_source_term_label": "Increased circulating ferritin concentration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0003281",
      "term_label": "Increased circulating ferritin concentration",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003281",
      "best_source_term_label": "Increased circulating ferritin concentration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003281" } }));
