window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200123"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200123",
  "term_label": "Abnormal response to social norms",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Angelman Syndrome",
      "disease_term_id": "MONDO:0007113",
      "source_file": "Angelman_Syndrome.yaml",
      "term_id": "HP:5200123",
      "term_label": "Abnormal response to social norms",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000748",
      "best_source_term_label": "Inappropriate laughter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000748"
      ],
      "supporting_source_term_labels": [
        "Inappropriate laughter"
      ],
      "supporting_source_node_names": [
        "Inappropriate laughter"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pick Disease",
      "disease_term_id": "MONDO:0008243",
      "source_file": "Pick_Disease.yaml",
      "term_id": "HP:5200123",
      "term_label": "Abnormal response to social norms",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000719",
      "best_source_term_label": "Inappropriate behavior",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000719"
      ],
      "supporting_source_term_labels": [
        "Inappropriate behavior"
      ],
      "supporting_source_node_names": [
        "Inappropriate Behavior"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200123" } }));
