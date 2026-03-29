window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001295"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001295",
  "term_label": "endometrium",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "UBERON:0001295",
      "term_label": "endometrium",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001295",
      "best_source_term_label": "endometrium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001295"
      ],
      "supporting_source_term_labels": [
        "endometrium"
      ],
      "supporting_source_node_names": [
        "Accelerated Tumor Development",
        "Microsatellite Instability",
        "Neoantigen Generation and Immune Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "MSI-High Endometrial Cancer",
      "disease_term_id": "MONDO:0011962",
      "source_file": "MSI_High_Endometrial_Cancer.yaml",
      "term_id": "UBERON:0001295",
      "term_label": "endometrium",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001295",
      "best_source_term_label": "endometrium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001295"
      ],
      "supporting_source_term_labels": [
        "endometrium"
      ],
      "supporting_source_node_names": [
        "Mismatch Repair Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001295" } }));
