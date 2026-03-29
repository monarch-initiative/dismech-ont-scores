window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000135"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000135",
  "term_label": "Hypogonadism",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.772697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "HP:0000135",
      "term_label": "Hypogonadism",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000135",
      "best_source_term_label": "Hypogonadism",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000135"
      ],
      "supporting_source_term_labels": [
        "Hypogonadism"
      ],
      "supporting_source_node_names": [
        "Hypogonadism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "HP:0000135",
      "term_label": "Hypogonadism",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000135",
      "best_source_term_label": "Hypogonadism",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000135"
      ],
      "supporting_source_term_labels": [
        "Hypogonadism"
      ],
      "supporting_source_node_names": [
        "Hypogonadism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "HP:0000135",
      "term_label": "Hypogonadism",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000815",
      "best_source_term_label": "Hypergonadotropic hypogonadism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000815"
      ],
      "supporting_source_term_labels": [
        "Hypergonadotropic hypogonadism"
      ],
      "supporting_source_node_names": [
        "Hypergonadotropic Hypogonadism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "HP:0000135",
      "term_label": "Hypogonadism",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000044",
      "best_source_term_label": "Hypogonadotropic hypogonadism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000044"
      ],
      "supporting_source_term_labels": [
        "Hypogonadotropic hypogonadism"
      ],
      "supporting_source_node_names": [
        "Hypogonadism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000135" } }));
