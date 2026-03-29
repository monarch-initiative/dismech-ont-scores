window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025168"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025168",
  "term_label": "Left ventricular diastolic dysfunction",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hypertensive Heart Disease",
      "disease_term_id": "MONDO:0001302",
      "source_file": "Hypertensive_Heart_Disease.yaml",
      "term_id": "HP:0025168",
      "term_label": "Left ventricular diastolic dysfunction",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0025168",
      "best_source_term_label": "Left ventricular diastolic dysfunction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025168"
      ],
      "supporting_source_term_labels": [
        "Left ventricular diastolic dysfunction"
      ],
      "supporting_source_node_names": [
        "Left Ventricular Diastolic Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025168" } }));
