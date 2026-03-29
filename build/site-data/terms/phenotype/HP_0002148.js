window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002148"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002148",
  "term_label": "Hypophosphatemia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "HP:0002148",
      "term_label": "Hypophosphatemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002148",
      "best_source_term_label": "Hypophosphatemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002148"
      ],
      "supporting_source_term_labels": [
        "Hypophosphatemia"
      ],
      "supporting_source_node_names": [
        "Hypophosphataemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "X-Linked Hypophosphatemia",
      "disease_term_id": "MONDO:0010619",
      "source_file": "X-Linked_Hypophosphatemia.yaml",
      "term_id": "HP:0002148",
      "term_label": "Hypophosphatemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002148",
      "best_source_term_label": "Hypophosphatemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002148"
      ],
      "supporting_source_term_labels": [
        "Hypophosphatemia"
      ],
      "supporting_source_node_names": [
        "Hypophosphatemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002148" } }));
