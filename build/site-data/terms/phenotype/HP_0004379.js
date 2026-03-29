window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004379"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004379",
  "term_label": "Abnormality of alkaline phosphatase level",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hypophosphatasia",
      "disease_term_id": "MONDO:0018570",
      "source_file": "Hypophosphatasia.yaml",
      "term_id": "HP:0004379",
      "term_label": "Abnormality of alkaline phosphatase level",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003282",
      "best_source_term_label": "Decreased circulating alkaline phosphatase activity",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003282"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating alkaline phosphatase activity"
      ],
      "supporting_source_node_names": [
        "Low Alkaline Phosphatase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004379" } }));
