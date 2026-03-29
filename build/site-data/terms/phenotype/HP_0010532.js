window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010532"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010532",
  "term_label": "Paroxysmal vertigo",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Meniere's Disease",
      "disease_term_id": "MONDO:0007972",
      "source_file": "Menieres_Disease.yaml",
      "term_id": "HP:0010532",
      "term_label": "Paroxysmal vertigo",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0010532",
      "best_source_term_label": "Paroxysmal vertigo",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010532"
      ],
      "supporting_source_term_labels": [
        "Paroxysmal vertigo"
      ],
      "supporting_source_node_names": [
        "Episodic Vertigo"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010532" } }));
