window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006979"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006979",
  "term_label": "Sleep-wake cycle disturbance",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "HP:0006979",
      "term_label": "Sleep-wake cycle disturbance",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0006979",
      "best_source_term_label": "Sleep-wake cycle disturbance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006979"
      ],
      "supporting_source_term_labels": [
        "Sleep-wake cycle disturbance"
      ],
      "supporting_source_node_names": [
        "Sleep-Wake Cycle Disturbance"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Human African trypanosomiasis",
      "disease_term_id": "MONDO:0005459",
      "source_file": "Human_African_Trypanosomiasis.yaml",
      "term_id": "HP:0006979",
      "term_label": "Sleep-wake cycle disturbance",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0006979",
      "best_source_term_label": "Sleep-wake cycle disturbance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006979"
      ],
      "supporting_source_term_labels": [
        "Sleep-wake cycle disturbance"
      ],
      "supporting_source_node_names": [
        "Sleep-wake cycle disturbance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006979" } }));
