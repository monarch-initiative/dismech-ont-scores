window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034314"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034314",
  "term_label": "Abnormal left ventricular ejection fraction",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Multisystem Inflammatory Syndrome in Children (MIS-C)",
      "disease_term_id": "MONDO:0100163",
      "source_file": "Multisystem_Inflammatory_Syndrome_in_Children_MIS-C.yaml",
      "term_id": "HP:0034314",
      "term_label": "Abnormal left ventricular ejection fraction",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0012664",
      "best_source_term_label": "Reduced left ventricular ejection fraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012664"
      ],
      "supporting_source_term_labels": [
        "Reduced left ventricular ejection fraction"
      ],
      "supporting_source_node_names": [
        "Reduced Left Ventricular Ejection Fraction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034314" } }));
