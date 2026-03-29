window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0032158"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0032158",
  "term_label": "Unusual infection by anatomical site",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.440468,
  "mean_score": 0.357717,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:0032158",
      "term_label": "Unusual infection by anatomical site",
      "score": 0.440468,
      "direct_score": 0.0,
      "propagated_score": 0.592359,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001287",
      "best_source_term_label": "Meningitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001287",
        "HP:0002383"
      ],
      "supporting_source_term_labels": [
        "Infectious encephalitis",
        "Meningitis"
      ],
      "supporting_source_node_names": [
        "Aseptic meningitis",
        "Brainstem encephalitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "HP:0032158",
      "term_label": "Unusual infection by anatomical site",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001287",
      "best_source_term_label": "Meningitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001287"
      ],
      "supporting_source_term_labels": [
        "Meningitis"
      ],
      "supporting_source_node_names": [
        "Chronic aseptic meningitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "HP:0032158",
      "term_label": "Unusual infection by anatomical site",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001287",
      "best_source_term_label": "Meningitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001287"
      ],
      "supporting_source_term_labels": [
        "Meningitis"
      ],
      "supporting_source_node_names": [
        "Meningitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Rabies",
      "disease_term_id": "MONDO:0019173",
      "source_file": "Rabies.yaml",
      "term_id": "HP:0032158",
      "term_label": "Unusual infection by anatomical site",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002383",
      "best_source_term_label": "Infectious encephalitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002383"
      ],
      "supporting_source_term_labels": [
        "Infectious encephalitis"
      ],
      "supporting_source_node_names": [
        "Infectious encephalitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Coccidioidomycosis",
      "disease_term_id": "MONDO:0005706",
      "source_file": "Coccidioidomycosis.yaml",
      "term_id": "HP:0032158",
      "term_label": "Unusual infection by anatomical site",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0032159",
      "best_source_term_label": "Fungal meningitis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0032159"
      ],
      "supporting_source_term_labels": [
        "Fungal meningitis"
      ],
      "supporting_source_node_names": [
        "Fungal meningitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0032158" } }));
