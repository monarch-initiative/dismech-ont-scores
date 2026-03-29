window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:8440011"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:8440011",
  "term_label": "cortical visual area",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.635226,
  "mean_score": 0.442733,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Akinetopsia",
      "disease_term_id": "MONDO:0000660",
      "source_file": "Akinetopsia.yaml",
      "term_id": "UBERON:8440011",
      "term_label": "cortical visual area",
      "score": 0.635226,
      "direct_score": 0.0,
      "propagated_score": 0.77,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0022232",
      "best_source_term_label": "secondary visual cortex",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000411",
        "UBERON:0022232"
      ],
      "supporting_source_term_labels": [
        "secondary visual cortex",
        "visual cortex"
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
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "UBERON:8440011",
      "term_label": "cortical visual area",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000411",
      "best_source_term_label": "visual cortex",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000411"
      ],
      "supporting_source_term_labels": [
        "visual cortex"
      ],
      "supporting_source_node_names": [
        "Disrupted Cortical Function"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:8440011",
      "term_label": "cortical visual area",
      "score": 0.115496,
      "direct_score": 0.0,
      "propagated_score": 0.14,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000411",
      "best_source_term_label": "visual cortex",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000411"
      ],
      "supporting_source_term_labels": [
        "visual cortex"
      ],
      "supporting_source_node_names": [
        "Optic-Trigeminal Cross-Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:8440011" } }));
