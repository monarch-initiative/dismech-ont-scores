window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002858"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002858",
  "term_label": "Meningioma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "HP:0002858",
      "term_label": "Meningioma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002858",
      "best_source_term_label": "Meningioma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002858"
      ],
      "supporting_source_term_labels": [
        "Meningioma"
      ],
      "supporting_source_node_names": [
        "Meningioma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002858" } }));
