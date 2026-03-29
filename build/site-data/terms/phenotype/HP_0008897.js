window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008897"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008897",
  "term_label": "Postnatal growth retardation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Wolf-Hirschhorn_Syndrome",
      "disease_term_id": "",
      "source_file": "Wolf-Hirschhorn_Syndrome.yaml",
      "term_id": "HP:0008897",
      "term_label": "Postnatal growth retardation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0008897",
      "best_source_term_label": "Postnatal growth retardation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008897"
      ],
      "supporting_source_term_labels": [
        "Postnatal growth retardation"
      ],
      "supporting_source_node_names": [
        "Postnatal Growth Retardation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008897" } }));
