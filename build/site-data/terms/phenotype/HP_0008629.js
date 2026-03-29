window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008629"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008629",
  "term_label": "Pulsatile tinnitus",
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
      "term_id": "HP:0008629",
      "term_label": "Pulsatile tinnitus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0008629",
      "best_source_term_label": "Pulsatile tinnitus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008629"
      ],
      "supporting_source_term_labels": [
        "Pulsatile tinnitus"
      ],
      "supporting_source_node_names": [
        "Pulsatile Tinnitus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008629" } }));
