window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000123"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000123",
  "term_label": "Nephritis",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.674355,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Granulomatosis with Polyangiitis",
      "disease_term_id": "MONDO:0012105",
      "source_file": "Granulomatosis_with_Polyangiitis.yaml",
      "term_id": "HP:0000123",
      "term_label": "Nephritis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000123",
      "best_source_term_label": "Nephritis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000123"
      ],
      "supporting_source_term_labels": [
        "Nephritis"
      ],
      "supporting_source_node_names": [
        "Glomerulonephritis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "HP:0000123",
      "term_label": "Nephritis",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000123" } }));
