window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002453"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002453",
  "term_label": "Abnormal globus pallidus morphology",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Guanidinoacetate Methyltransferase Deficiency",
      "disease_term_id": "MONDO:0012999",
      "source_file": "Guanidinoacetate_Methyltransferase_Deficiency.yaml",
      "term_id": "HP:0002453",
      "term_label": "Abnormal globus pallidus morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002453",
      "best_source_term_label": "Abnormal globus pallidus morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002453"
      ],
      "supporting_source_term_labels": [
        "Abnormal globus pallidus morphology"
      ],
      "supporting_source_node_names": [
        "Abnormality of the globus pallidus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002453" } }));
