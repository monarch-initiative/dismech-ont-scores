window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004408"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004408",
  "term_label": "Abnormality of the sense of smell",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.577478,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "HP:0004408",
      "term_label": "Abnormality of the sense of smell",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0004409",
      "best_source_term_label": "Hyposmia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004409"
      ],
      "supporting_source_term_labels": [
        "Hyposmia"
      ],
      "supporting_source_node_names": [
        "Hyposmia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "HP:0004408",
      "term_label": "Abnormality of the sense of smell",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000458",
      "best_source_term_label": "Anosmia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000458"
      ],
      "supporting_source_term_labels": [
        "Anosmia"
      ],
      "supporting_source_node_names": [
        "Anosmia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "HP:0004408",
      "term_label": "Abnormality of the sense of smell",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0004409",
      "best_source_term_label": "Hyposmia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004409"
      ],
      "supporting_source_term_labels": [
        "Hyposmia"
      ],
      "supporting_source_node_names": [
        "Hyposmia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004408" } }));
