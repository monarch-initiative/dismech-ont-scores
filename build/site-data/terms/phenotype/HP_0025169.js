window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025169"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025169",
  "term_label": "Left ventricular systolic dysfunction",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dilated Cardiomyopathy",
      "disease_term_id": "MONDO:0005021",
      "source_file": "Dilated_Cardiomyopathy.yaml",
      "term_id": "HP:0025169",
      "term_label": "Left ventricular systolic dysfunction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025169",
      "best_source_term_label": "Left ventricular systolic dysfunction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025169"
      ],
      "supporting_source_term_labels": [
        "Left ventricular systolic dysfunction"
      ],
      "supporting_source_node_names": [
        "Left ventricular systolic dysfunction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multisystem Inflammatory Syndrome in Children (MIS-C)",
      "disease_term_id": "MONDO:0100163",
      "source_file": "Multisystem_Inflammatory_Syndrome_in_Children_MIS-C.yaml",
      "term_id": "HP:0025169",
      "term_label": "Left ventricular systolic dysfunction",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025169" } }));
