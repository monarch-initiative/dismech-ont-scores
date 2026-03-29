window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033401"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033401",
  "term_label": "Tissue ischemia",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.421559,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "HP:0033401",
      "term_label": "Tissue ischemia",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0033402",
      "best_source_term_label": "Digital ischemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033402"
      ],
      "supporting_source_term_labels": [
        "Digital ischemia"
      ],
      "supporting_source_node_names": [
        "Digital Ischemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0033401",
      "term_label": "Tissue ischemia",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002140",
      "best_source_term_label": "Ischemic stroke",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002140"
      ],
      "supporting_source_term_labels": [
        "Ischemic stroke"
      ],
      "supporting_source_node_names": [
        "Ischemic Stroke"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CADASIL Type 1",
      "disease_term_id": "MONDO:0007432",
      "source_file": "CADASIL_Type_1.yaml",
      "term_id": "HP:0033401",
      "term_label": "Tissue ischemia",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0032325",
      "best_source_term_label": "Lacunar stroke",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0032325"
      ],
      "supporting_source_term_labels": [
        "Lacunar stroke"
      ],
      "supporting_source_node_names": [
        "Recurrent Ischemic Stroke"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033401" } }));
