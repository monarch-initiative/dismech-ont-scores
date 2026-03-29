window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001199"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001199",
  "term_label": "Triphalangeal thumb",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "HP:0001199",
      "term_label": "Triphalangeal thumb",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001199",
      "best_source_term_label": "Triphalangeal thumb",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001199"
      ],
      "supporting_source_term_labels": [
        "Triphalangeal thumb"
      ],
      "supporting_source_node_names": [
        "Triphalangeal Thumb"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "HP:0001199",
      "term_label": "Triphalangeal thumb",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001199",
      "best_source_term_label": "Triphalangeal thumb",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001199"
      ],
      "supporting_source_term_labels": [
        "Triphalangeal thumb"
      ],
      "supporting_source_node_names": [
        "Triphalangeal thumb"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001199" } }));
