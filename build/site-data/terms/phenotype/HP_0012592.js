window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012592"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012592",
  "term_label": "Albuminuria",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.085899,
  "mean_score": 0.085899,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0012592",
      "term_label": "Albuminuria",
      "score": 0.085899,
      "direct_score": 0.085899,
      "propagated_score": 0.085899,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0012592",
      "best_source_term_label": "Albuminuria",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012592"
      ],
      "supporting_source_term_labels": [
        "Albuminuria"
      ],
      "supporting_source_node_names": [
        "Albuminuria"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012592" } }));
