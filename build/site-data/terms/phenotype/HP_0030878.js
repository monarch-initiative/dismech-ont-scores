window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030878"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030878",
  "term_label": "Abnormality on pulmonary function testing",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fibrodysplasia Ossificans Progressiva",
      "disease_term_id": "MONDO:0007606",
      "source_file": "Fibrodysplasia_Ossificans_Progressiva.yaml",
      "term_id": "HP:0030878",
      "term_label": "Abnormality on pulmonary function testing",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0002091",
      "best_source_term_label": "Restrictive ventilatory defect",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002091"
      ],
      "supporting_source_term_labels": [
        "Restrictive ventilatory defect"
      ],
      "supporting_source_node_names": [
        "Restrictive Ventilatory Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030878" } }));
