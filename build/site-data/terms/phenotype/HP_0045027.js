window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0045027"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0045027",
  "term_label": "Abnormality of the thoracic cavity",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Sarcoidosis",
      "disease_term_id": "MONDO:0019338",
      "source_file": "Sarcoidosis.yaml",
      "term_id": "HP:0045027",
      "term_label": "Abnormality of the thoracic cavity",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0100721",
      "best_source_term_label": "Mediastinal lymphadenopathy",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100721"
      ],
      "supporting_source_term_labels": [
        "Mediastinal lymphadenopathy"
      ],
      "supporting_source_node_names": [
        "Mediastinal Lymphadenopathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0045027" } }));
