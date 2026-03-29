window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001956"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001956",
  "term_label": "Truncal obesity",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "HP:0001956",
      "term_label": "Truncal obesity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001956",
      "best_source_term_label": "Truncal obesity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001956"
      ],
      "supporting_source_term_labels": [
        "Truncal obesity"
      ],
      "supporting_source_node_names": [
        "Truncal Obesity"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "HP:0001956",
      "term_label": "Truncal obesity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001956",
      "best_source_term_label": "Truncal obesity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001956"
      ],
      "supporting_source_term_labels": [
        "Truncal obesity"
      ],
      "supporting_source_node_names": [
        "Central Obesity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001956" } }));
