window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100276"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100276",
  "term_label": "Skin pit",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.91,
  "mean_score": 0.91,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "HP:0100276",
      "term_label": "Skin pit",
      "score": 0.91,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0010612",
      "best_source_term_label": "Plantar pits",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010610",
        "HP:0010612"
      ],
      "supporting_source_term_labels": [
        "Palmar pits",
        "Plantar pits"
      ],
      "supporting_source_node_names": [
        "Palmar Pits",
        "Plantar Pits"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100276" } }));
