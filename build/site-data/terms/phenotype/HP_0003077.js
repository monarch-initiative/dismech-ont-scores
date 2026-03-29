window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003077"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003077",
  "term_label": "Hyperlipidemia",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.886348,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cori Forbes Disease",
      "disease_term_id": "MONDO:0009291",
      "source_file": "Cori_Forbes_Disease.yaml",
      "term_id": "HP:0003077",
      "term_label": "Hyperlipidemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003077",
      "best_source_term_label": "Hyperlipidemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003077"
      ],
      "supporting_source_term_labels": [
        "Hyperlipidemia"
      ],
      "supporting_source_node_names": [
        "Hyperlipidemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "HP:0003077",
      "term_label": "Hyperlipidemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003077",
      "best_source_term_label": "Hyperlipidemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002155",
        "HP:0003077"
      ],
      "supporting_source_term_labels": [
        "Hyperlipidemia",
        "Hypertriglyceridemia"
      ],
      "supporting_source_node_names": [
        "Hyperlipidemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "HP:0003077",
      "term_label": "Hyperlipidemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003077",
      "best_source_term_label": "Hyperlipidemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003077"
      ],
      "supporting_source_term_labels": [
        "Hyperlipidemia"
      ],
      "supporting_source_node_names": [
        "Dyslipidemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0003077",
      "term_label": "Hyperlipidemia",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002155",
      "best_source_term_label": "Hypertriglyceridemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002155"
      ],
      "supporting_source_term_labels": [
        "Hypertriglyceridemia"
      ],
      "supporting_source_node_names": [
        "Elevated Triglycerides"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003077" } }));
