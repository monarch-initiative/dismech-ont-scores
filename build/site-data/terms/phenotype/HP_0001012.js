window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001012"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001012",
  "term_label": "Multiple lipomas",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.892,
  "mean_score": 0.892,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0001012",
      "term_label": "Multiple lipomas",
      "score": 0.892,
      "direct_score": 0.64,
      "propagated_score": 0.892,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0025476",
      "best_source_term_label": "Testicular lipomatosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001012",
        "HP:0025476"
      ],
      "supporting_source_term_labels": [
        "Multiple lipomas",
        "Testicular lipomatosis"
      ],
      "supporting_source_node_names": [
        "Lipomatous Overgrowth"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001012" } }));
