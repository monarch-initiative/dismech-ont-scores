window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000411"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000411",
  "term_label": "visual cortex",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.583326,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "UBERON:0000411",
      "term_label": "visual cortex",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000411",
      "best_source_term_label": "visual cortex",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Akinetopsia",
      "disease_term_id": "MONDO:0000660",
      "source_file": "Akinetopsia.yaml",
      "term_id": "UBERON:0000411",
      "term_label": "visual cortex",
      "score": 0.549979,
      "direct_score": 0.333333,
      "propagated_score": 0.666667,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0022232",
      "best_source_term_label": "secondary visual cortex",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000411",
        "UBERON:0022232"
      ],
      "supporting_source_term_labels": [
        "secondary visual cortex",
        "visual cortex"
      ],
      "supporting_source_node_names": [
        "Induced disruption from TMS or medications",
        "Paroxysmal or intoxication-related cortical dysfunction",
        "Severity depends on surviving motion network components and stimulus speed",
        "Structural neurological damage to motion network",
        "V5/MT motion-processing cortex dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0000411",
      "term_label": "visual cortex",
      "score": 0.2,
      "direct_score": 0.2,
      "propagated_score": 0.2,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000411",
      "best_source_term_label": "visual cortex",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000411" } }));
