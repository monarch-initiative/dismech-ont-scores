window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009718"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009718",
  "term_label": "Subependymal giant-cell astrocytoma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0009718",
      "term_label": "Subependymal giant-cell astrocytoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0009718",
      "best_source_term_label": "Subependymal giant-cell astrocytoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009718"
      ],
      "supporting_source_term_labels": [
        "Subependymal giant-cell astrocytoma"
      ],
      "supporting_source_node_names": [
        "Subependymal Giant Cell Astrocytoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009718" } }));
