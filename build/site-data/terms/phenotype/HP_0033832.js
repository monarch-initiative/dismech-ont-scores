window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033832"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033832",
  "term_label": "Livedo",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "HP:0033832",
      "term_label": "Livedo",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0033505",
      "best_source_term_label": "Livedo reticularis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033505"
      ],
      "supporting_source_term_labels": [
        "Livedo reticularis"
      ],
      "supporting_source_node_names": [
        "Livedo Reticularis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033832" } }));
