window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0010147"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0010147",
  "term_label": "male accessory sex gland",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "BRCA-Mutant Prostate Cancer",
      "disease_term_id": "MONDO:0008315",
      "source_file": "BRCA_Mutant_Prostate_Cancer.yaml",
      "term_id": "UBERON:0010147",
      "term_label": "male accessory sex gland",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002367",
      "best_source_term_label": "prostate gland",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002367"
      ],
      "supporting_source_term_labels": [
        "prostate gland"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Repair Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0010147" } }));
