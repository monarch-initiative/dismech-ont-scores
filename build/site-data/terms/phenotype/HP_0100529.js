window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100529"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100529",
  "term_label": "Abnormal blood phosphate concentration",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.577478,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "HP:0100529",
      "term_label": "Abnormal blood phosphate concentration",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002148",
      "best_source_term_label": "Hypophosphatemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "HP:0100529",
      "term_label": "Abnormal blood phosphate concentration",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002905",
      "best_source_term_label": "Hyperphosphatemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002905"
      ],
      "supporting_source_term_labels": [
        "Hyperphosphatemia"
      ],
      "supporting_source_node_names": [
        "Hyperphosphatemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "X-Linked Hypophosphatemia",
      "disease_term_id": "MONDO:0010619",
      "source_file": "X-Linked_Hypophosphatemia.yaml",
      "term_id": "HP:0100529",
      "term_label": "Abnormal blood phosphate concentration",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002148",
      "best_source_term_label": "Hypophosphatemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100529" } }));
