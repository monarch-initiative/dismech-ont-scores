window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0022232"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0022232",
  "term_label": "secondary visual cortex",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Akinetopsia",
      "disease_term_id": "MONDO:0000660",
      "source_file": "Akinetopsia.yaml",
      "term_id": "UBERON:0022232",
      "term_label": "secondary visual cortex",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0022232",
      "best_source_term_label": "secondary visual cortex",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0022232"
      ],
      "supporting_source_term_labels": [
        "secondary visual cortex"
      ],
      "supporting_source_node_names": [
        "Bilateral V5/MT lesions",
        "Epileptic hyperexcitability of MT/V5 cortex",
        "Global akinetopsia with chronic course",
        "Induced disruption from TMS or medications",
        "Left V5/MT susceptibility to acute interference",
        "Paroxysmal or intoxication-related cortical dysfunction",
        "Right-hemispheric V5/MT predominance in clinical cases",
        "Severity depends on surviving motion network components and stimulus speed",
        "Structural neurological damage to motion network",
        "V5/MT motion-processing cortex dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0022232" } }));
