window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003072"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003072",
  "term_label": "Hypercalcemia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Adult T-Cell Leukemia/Lymphoma",
      "disease_term_id": "MONDO:0019471",
      "source_file": "Adult_T_Cell_Leukemia_Lymphoma.yaml",
      "term_id": "HP:0003072",
      "term_label": "Hypercalcemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003072",
      "best_source_term_label": "Hypercalcemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003072"
      ],
      "supporting_source_term_labels": [
        "Hypercalcemia"
      ],
      "supporting_source_node_names": [
        "Hypercalcemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Myeloma",
      "disease_term_id": "MONDO:0009693",
      "source_file": "Multiple_Myeloma.yaml",
      "term_id": "HP:0003072",
      "term_label": "Hypercalcemia",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003072",
      "best_source_term_label": "Hypercalcemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003072"
      ],
      "supporting_source_term_labels": [
        "Hypercalcemia"
      ],
      "supporting_source_node_names": [
        "Hypercalcemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003072" } }));
