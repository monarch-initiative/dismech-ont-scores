window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025785"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025785",
  "term_label": "Abnormal preoccupation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "HP:0025785",
      "term_label": "Abnormal preoccupation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0031589",
      "best_source_term_label": "Suicidal ideation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031589"
      ],
      "supporting_source_term_labels": [
        "Suicidal ideation"
      ],
      "supporting_source_node_names": [
        "Suicidal ideation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "FICUS syndrome",
      "disease_term_id": "",
      "source_file": "FICUS_syndrome.yaml",
      "term_id": "HP:0025785",
      "term_label": "Abnormal preoccupation",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:5200271",
      "best_source_term_label": "Hopelessness",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:5200271"
      ],
      "supporting_source_term_labels": [
        "Hopelessness"
      ],
      "supporting_source_node_names": [
        "Hopelessness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025785" } }));
