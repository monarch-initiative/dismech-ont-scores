window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001888"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001888",
  "term_label": "Decreased total lymphocyte count",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Acquired Immunodeficiency Syndrome",
      "disease_term_id": "MONDO:0012268",
      "source_file": "Acquired_Immunodeficiency_Syndrome.yaml",
      "term_id": "HP:0001888",
      "term_label": "Decreased total lymphocyte count",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001888",
      "best_source_term_label": "Decreased total lymphocyte count",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001888"
      ],
      "supporting_source_term_labels": [
        "Decreased total lymphocyte count"
      ],
      "supporting_source_node_names": [
        "Lymphopenia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multisystem Inflammatory Syndrome in Children (MIS-C)",
      "disease_term_id": "MONDO:0100163",
      "source_file": "Multisystem_Inflammatory_Syndrome_in_Children_MIS-C.yaml",
      "term_id": "HP:0001888",
      "term_label": "Decreased total lymphocyte count",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001888",
      "best_source_term_label": "Decreased total lymphocyte count",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001888"
      ],
      "supporting_source_term_labels": [
        "Decreased total lymphocyte count"
      ],
      "supporting_source_node_names": [
        "Lymphopenia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001888" } }));
