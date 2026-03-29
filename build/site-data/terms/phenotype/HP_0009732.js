window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009732"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009732",
  "term_label": "Plexiform neurofibroma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0009732",
      "term_label": "Plexiform neurofibroma",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0009732",
      "best_source_term_label": "Plexiform neurofibroma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009732"
      ],
      "supporting_source_term_labels": [
        "Plexiform neurofibroma"
      ],
      "supporting_source_node_names": [
        "Plexiform Neurofibromas"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009732" } }));
