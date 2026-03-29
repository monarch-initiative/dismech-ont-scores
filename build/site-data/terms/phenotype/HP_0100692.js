window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100692"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100692",
  "term_label": "Increased corneal curvature",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ehlers-Danlos Syndrome",
      "disease_term_id": "MONDO:0020066",
      "source_file": "Ehlers-Danlos_Syndrome.yaml",
      "term_id": "HP:0100692",
      "term_label": "Increased corneal curvature",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000563",
      "best_source_term_label": "Keratoconus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000563"
      ],
      "supporting_source_term_labels": [
        "Keratoconus"
      ],
      "supporting_source_node_names": [
        "Keratoconus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100692" } }));
