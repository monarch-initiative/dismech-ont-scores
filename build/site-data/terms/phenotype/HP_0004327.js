window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004327"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004327",
  "term_label": "Abnormal vitreous humor morphology",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.659045,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "HP:0004327",
      "term_label": "Abnormal vitreous humor morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0004327",
      "best_source_term_label": "Abnormal vitreous humor morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004327",
        "HP:0100832"
      ],
      "supporting_source_term_labels": [
        "Abnormal vitreous humor morphology",
        "Vitreous floaters"
      ],
      "supporting_source_node_names": [
        "Vitreous Opacities"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "HP:0004327",
      "term_label": "Abnormal vitreous humor morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0007710",
      "best_source_term_label": "Peripheral vitreous opacities",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007710"
      ],
      "supporting_source_term_labels": [
        "Peripheral vitreous opacities"
      ],
      "supporting_source_node_names": [
        "Vitreous Opacities"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Stickler Syndrome Type 1",
      "disease_term_id": "MONDO:0007160",
      "source_file": "Stickler_Syndrome_Type_1.yaml",
      "term_id": "HP:0004327",
      "term_label": "Abnormal vitreous humor morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0031153",
      "best_source_term_label": "Membranous vitreous appearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031153"
      ],
      "supporting_source_term_labels": [
        "Membranous vitreous appearance"
      ],
      "supporting_source_node_names": [
        "Membranous Vitreous"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Visual Snow Syndrome",
      "disease_term_id": "MONDO:0018486",
      "source_file": "Visual_Snow_Syndrome.yaml",
      "term_id": "HP:0004327",
      "term_label": "Abnormal vitreous humor morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100832",
      "best_source_term_label": "Vitreous floaters",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100832"
      ],
      "supporting_source_term_labels": [
        "Vitreous floaters"
      ],
      "supporting_source_node_names": [
        "Vitreous Floaters"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004327" } }));
