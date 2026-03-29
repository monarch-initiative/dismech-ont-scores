window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0007734"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0007734",
  "term_label": "Enlarged lacrimal glands",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "IgG4-Related Disease",
      "disease_term_id": "MONDO:0017287",
      "source_file": "IgG4-Related_Disease.yaml",
      "term_id": "HP:0007734",
      "term_label": "Enlarged lacrimal glands",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0007734",
      "best_source_term_label": "Enlarged lacrimal glands",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007734"
      ],
      "supporting_source_term_labels": [
        "Enlarged lacrimal glands"
      ],
      "supporting_source_node_names": [
        "Enlarged Lacrimal Glands"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0007734" } }));
