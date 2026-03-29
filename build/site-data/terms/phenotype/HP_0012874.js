window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012874"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012874",
  "term_label": "Abnormal male reproductive system physiology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.305122,
  "mean_score": 0.305122,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "HP:0012874",
      "term_label": "Abnormal male reproductive system physiology",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000027",
      "best_source_term_label": "Azoospermia",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000027"
      ],
      "supporting_source_term_labels": [
        "Azoospermia"
      ],
      "supporting_source_node_names": [
        "Azoospermia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "HP:0012874",
      "term_label": "Abnormal male reproductive system physiology",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0200023",
      "best_source_term_label": "Priapism",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200023"
      ],
      "supporting_source_term_labels": [
        "Priapism"
      ],
      "supporting_source_node_names": [
        "Priapism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012874" } }));
