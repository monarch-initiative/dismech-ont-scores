window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000159"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000159",
  "term_label": "Abnormal lip morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.479307,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Peutz-Jeghers polyp",
      "disease_term_id": "MONDO:0006365",
      "source_file": "Peutz_Jeghers_polyp.yaml",
      "term_id": "HP:0000159",
      "term_label": "Abnormal lip morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0032453",
      "best_source_term_label": "Abnormal lip pigmentation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0032453"
      ],
      "supporting_source_term_labels": [
        "Abnormal lip pigmentation"
      ],
      "supporting_source_node_names": [
        "Abnormal lip pigmentation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0000159",
      "term_label": "Abnormal lip morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012471",
      "best_source_term_label": "Thick vermilion border",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012471"
      ],
      "supporting_source_term_labels": [
        "Thick vermilion border"
      ],
      "supporting_source_node_names": [
        "Thick vermilion border"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Orofaciodigital Syndrome Type I",
      "disease_term_id": "MONDO:0010702",
      "source_file": "Orofaciodigital_Syndrome_Type_I.yaml",
      "term_id": "HP:0000159",
      "term_label": "Abnormal lip morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000161",
      "best_source_term_label": "Median cleft upper lip",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000161"
      ],
      "supporting_source_term_labels": [
        "Median cleft upper lip"
      ],
      "supporting_source_node_names": [
        "Median Cleft Upper Lip"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000159" } }));
