window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6000032"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6000032",
  "term_label": "Autophony",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "HP:6000032",
      "term_label": "Autophony",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:6000032",
      "best_source_term_label": "Autophony",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000032"
      ],
      "supporting_source_term_labels": [
        "Autophony"
      ],
      "supporting_source_node_names": [
        "Autophony"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6000032" } }));
