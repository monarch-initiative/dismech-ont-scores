window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004309"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004309",
  "term_label": "Ventricular preexcitation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Danon disease",
      "disease_term_id": "MONDO:0010281",
      "source_file": "Danon_disease.yaml",
      "term_id": "HP:0004309",
      "term_label": "Ventricular preexcitation",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0001716",
      "best_source_term_label": "Wolff-Parkinson-White syndrome",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001716"
      ],
      "supporting_source_term_labels": [
        "Wolff-Parkinson-White syndrome"
      ],
      "supporting_source_node_names": [
        "Wolff-Parkinson-White syndrome"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004309" } }));
