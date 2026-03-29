window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000580"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000580",
  "term_label": "Pigmentary retinopathy",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "HP:0000580",
      "term_label": "Pigmentary retinopathy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000580",
      "best_source_term_label": "Pigmentary retinopathy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000580"
      ],
      "supporting_source_term_labels": [
        "Pigmentary retinopathy"
      ],
      "supporting_source_node_names": [
        "Pigmentary Retinopathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Mitochondrial Trifunctional Protein Deficiency",
      "disease_term_id": "MONDO:0012172",
      "source_file": "Mitochondrial_Trifunctional_Protein_Deficiency.yaml",
      "term_id": "HP:0000580",
      "term_label": "Pigmentary retinopathy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000580",
      "best_source_term_label": "Pigmentary retinopathy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000580"
      ],
      "supporting_source_term_labels": [
        "Pigmentary retinopathy"
      ],
      "supporting_source_node_names": [
        "Retinopathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000580" } }));
