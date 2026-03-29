window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011987"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011987",
  "term_label": "Ectopic ossification in muscle tissue",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fibrodysplasia Ossificans Progressiva",
      "disease_term_id": "MONDO:0007606",
      "source_file": "Fibrodysplasia_Ossificans_Progressiva.yaml",
      "term_id": "HP:0011987",
      "term_label": "Ectopic ossification in muscle tissue",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0011987",
      "best_source_term_label": "Ectopic ossification in muscle tissue",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011987"
      ],
      "supporting_source_term_labels": [
        "Ectopic ossification in muscle tissue"
      ],
      "supporting_source_node_names": [
        "Heterotopic Ossification"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011987" } }));
