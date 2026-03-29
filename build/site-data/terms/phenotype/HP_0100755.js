window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100755"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100755",
  "term_label": "Abnormality of salivation",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.51973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Green Tobacco Sickness",
      "disease_term_id": "",
      "source_file": "Green_Tobacco_Sickness.yaml",
      "term_id": "HP:0100755",
      "term_label": "Abnormality of salivation",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003781",
      "best_source_term_label": "Excessive salivation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003781"
      ],
      "supporting_source_term_labels": [
        "Excessive salivation"
      ],
      "supporting_source_node_names": [
        "Excessive Salivation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sjogren's Syndrome",
      "disease_term_id": "MONDO:0010030",
      "source_file": "Sjogrens_Syndrome.yaml",
      "term_id": "HP:0100755",
      "term_label": "Abnormality of salivation",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000217",
      "best_source_term_label": "Xerostomia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000217"
      ],
      "supporting_source_term_labels": [
        "Xerostomia"
      ],
      "supporting_source_node_names": [
        "Xerostomia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:0100755",
      "term_label": "Abnormality of salivation",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002307",
      "best_source_term_label": "Drooling",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002307"
      ],
      "supporting_source_term_labels": [
        "Drooling"
      ],
      "supporting_source_node_names": [
        "Drooling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100755" } }));
