window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000433"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000433",
  "term_label": "Abnormal nasal mucosa morphology",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "HP:0000433",
      "term_label": "Abnormal nasal mucosa morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000433",
      "best_source_term_label": "Abnormal nasal mucosa morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000433",
        "HP:0033521"
      ],
      "supporting_source_term_labels": [
        "Abnormal nasal mucosa morphology",
        "Nasal dryness"
      ],
      "supporting_source_node_names": [
        "Abnormal nasal mucosa morphology"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0000433",
      "term_label": "Abnormal nasal mucosa morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100582",
      "best_source_term_label": "Nasal polyposis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100582"
      ],
      "supporting_source_term_labels": [
        "Nasal polyposis"
      ],
      "supporting_source_node_names": [
        "Nasal Polyposis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000433" } }));
