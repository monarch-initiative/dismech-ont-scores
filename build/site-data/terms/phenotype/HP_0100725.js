window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100725"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100725",
  "term_label": "Lichenification",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "HP:0100725",
      "term_label": "Lichenification",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0100725",
      "best_source_term_label": "Lichenification",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100725"
      ],
      "supporting_source_term_labels": [
        "Lichenification"
      ],
      "supporting_source_node_names": [
        "Lichenification"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lichen Simplex Chronicus",
      "disease_term_id": "MONDO:0006585",
      "source_file": "Lichen_Simplex_Chronicus.yaml",
      "term_id": "HP:0100725",
      "term_label": "Lichenification",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0100725",
      "best_source_term_label": "Lichenification",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100725"
      ],
      "supporting_source_term_labels": [
        "Lichenification"
      ],
      "supporting_source_node_names": [
        "Lichenification"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100725" } }));
