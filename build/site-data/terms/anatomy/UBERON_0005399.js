window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005399"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005399",
  "term_label": "male reproductive gland",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "BRCA-Mutant Prostate Cancer",
      "disease_term_id": "MONDO:0008315",
      "source_file": "BRCA_Mutant_Prostate_Cancer.yaml",
      "term_id": "UBERON:0005399",
      "term_label": "male reproductive gland",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002367",
      "best_source_term_label": "prostate gland",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005399" } }));
