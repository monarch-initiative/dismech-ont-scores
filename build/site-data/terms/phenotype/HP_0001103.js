window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001103"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001103",
  "term_label": "Abnormal macular morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.775317,
  "mean_score": 0.562014,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0001103",
      "term_label": "Abnormal macular morphology",
      "score": 0.775317,
      "direct_score": 0.0,
      "propagated_score": 0.871566,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007754",
      "best_source_term_label": "Macular dystrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007401",
        "HP:0007754",
        "HP:0011504"
      ],
      "supporting_source_term_labels": [
        "Bull's eye maculopathy",
        "Macular atrophy",
        "Macular dystrophy"
      ],
      "supporting_source_node_names": [
        "Bull's eye maculopathy",
        "Macular atrophy",
        "Macular dystrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "HP:0001103",
      "term_label": "Abnormal macular morphology",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0040049",
      "best_source_term_label": "Macular edema",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0040049"
      ],
      "supporting_source_term_labels": [
        "Macular edema"
      ],
      "supporting_source_node_names": [
        "Macular Edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001103" } }));
