window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000095"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000095",
  "term_label": "Abnormal renal glomerulus morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.392,
  "mean_score": 0.392,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "HP:0000095",
      "term_label": "Abnormal renal glomerulus morphology",
      "score": 0.392,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0033726",
      "best_source_term_label": "Lupus nephritis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033726"
      ],
      "supporting_source_term_labels": [
        "Lupus nephritis"
      ],
      "supporting_source_node_names": [
        "Lupus Nephritis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000095" } }));
