window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011328"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011328",
  "term_label": "Abnormal fontanelle morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cleidocranial Dysplasia",
      "disease_term_id": "MONDO:0007340",
      "source_file": "Cleidocranial_Dysplasia.yaml",
      "term_id": "HP:0011328",
      "term_label": "Abnormal fontanelle morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000239",
      "best_source_term_label": "Large fontanelles",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000239"
      ],
      "supporting_source_term_labels": [
        "Large fontanelles"
      ],
      "supporting_source_node_names": [
        "Large Fontanelles"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pycnodysostosis",
      "disease_term_id": "MONDO:0009940",
      "source_file": "Pycnodysostosis.yaml",
      "term_id": "HP:0011328",
      "term_label": "Abnormal fontanelle morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000239",
      "best_source_term_label": "Large fontanelles",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000239"
      ],
      "supporting_source_term_labels": [
        "Large fontanelles"
      ],
      "supporting_source_node_names": [
        "Open Fontanelles"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011328" } }));
