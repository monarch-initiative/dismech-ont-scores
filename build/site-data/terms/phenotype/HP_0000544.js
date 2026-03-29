window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000544"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000544",
  "term_label": "External ophthalmoplegia",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "HP:0000544",
      "term_label": "External ophthalmoplegia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000544",
      "best_source_term_label": "External ophthalmoplegia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000544"
      ],
      "supporting_source_term_labels": [
        "External ophthalmoplegia"
      ],
      "supporting_source_node_names": [
        "External ophthalmoplegia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000544" } }));
