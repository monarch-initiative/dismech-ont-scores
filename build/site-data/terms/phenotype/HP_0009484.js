window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009484"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009484",
  "term_label": "Deviation of the hand or of fingers of the hand",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.381135,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Costello Syndrome",
      "disease_term_id": "MONDO:0009026",
      "source_file": "Costello_Syndrome.yaml",
      "term_id": "HP:0009484",
      "term_label": "Deviation of the hand or of fingers of the hand",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001193",
      "best_source_term_label": "Ulnar deviation of the hand or of fingers of the hand",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001193"
      ],
      "supporting_source_term_labels": [
        "Ulnar deviation of the hand or of fingers of the hand"
      ],
      "supporting_source_node_names": [
        "Ulnar Deviation of Hands"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "HP:0009484",
      "term_label": "Deviation of the hand or of fingers of the hand",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001234",
      "best_source_term_label": "Hitchhiker thumb",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001234"
      ],
      "supporting_source_term_labels": [
        "Hitchhiker thumb"
      ],
      "supporting_source_node_names": [
        "Hitchhiker Thumb"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diastrophic Dysplasia",
      "disease_term_id": "MONDO:0009107",
      "source_file": "Diastrophic_Dysplasia.yaml",
      "term_id": "HP:0009484",
      "term_label": "Deviation of the hand or of fingers of the hand",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001234",
      "best_source_term_label": "Hitchhiker thumb",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001234"
      ],
      "supporting_source_term_labels": [
        "Hitchhiker thumb"
      ],
      "supporting_source_node_names": [
        "Hitchhiker Thumb"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009484" } }));
