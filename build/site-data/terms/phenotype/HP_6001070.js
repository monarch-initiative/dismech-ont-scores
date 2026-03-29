window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6001070"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6001070",
  "term_label": "Subdural hygroma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "D-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0010924",
      "source_file": "D-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "HP:6001070",
      "term_label": "Subdural hygroma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:6001070",
      "best_source_term_label": "Subdural hygroma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6001070"
      ],
      "supporting_source_term_labels": [
        "Subdural hygroma"
      ],
      "supporting_source_node_names": [
        "Subdural hygroma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6001070" } }));
