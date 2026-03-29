window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004332"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004332",
  "term_label": "Abnormal lymphocyte morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.404234,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Acquired Immunodeficiency Syndrome",
      "disease_term_id": "MONDO:0012268",
      "source_file": "Acquired_Immunodeficiency_Syndrome.yaml",
      "term_id": "HP:0004332",
      "term_label": "Abnormal lymphocyte morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001888",
      "best_source_term_label": "Decreased total lymphocyte count",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "disorder_name": "Mantle Cell Lymphoma",
      "disease_term_id": "MONDO:0018876",
      "source_file": "Mantle_Cell_Lymphoma.yaml",
      "term_id": "HP:0004332",
      "term_label": "Abnormal lymphocyte morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0100827",
      "best_source_term_label": "Increased total lymphocyte count",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100827"
      ],
      "supporting_source_term_labels": [
        "Increased total lymphocyte count"
      ],
      "supporting_source_node_names": [
        "Peripheral Blood Lymphocytosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multisystem Inflammatory Syndrome in Children (MIS-C)",
      "disease_term_id": "MONDO:0100163",
      "source_file": "Multisystem_Inflammatory_Syndrome_in_Children_MIS-C.yaml",
      "term_id": "HP:0004332",
      "term_label": "Abnormal lymphocyte morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001888",
      "best_source_term_label": "Decreased total lymphocyte count",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004332" } }));
