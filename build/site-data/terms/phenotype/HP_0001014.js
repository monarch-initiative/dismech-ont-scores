window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001014"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001014",
  "term_label": "Angiokeratoma",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Mannosidosis",
      "disease_term_id": "MONDO:0009562",
      "source_file": "Beta_Mannosidosis.yaml",
      "term_id": "HP:0001014",
      "term_label": "Angiokeratoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001014",
      "best_source_term_label": "Angiokeratoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001014"
      ],
      "supporting_source_term_labels": [
        "Angiokeratoma"
      ],
      "supporting_source_node_names": [
        "Angiokeratoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fabry disease",
      "disease_term_id": "MONDO:0010526",
      "source_file": "Fabry_Disease.yaml",
      "term_id": "HP:0001014",
      "term_label": "Angiokeratoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001014",
      "best_source_term_label": "Angiokeratoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001014"
      ],
      "supporting_source_term_labels": [
        "Angiokeratoma"
      ],
      "supporting_source_node_names": [
        "Angiokeratomas"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001014" } }));
