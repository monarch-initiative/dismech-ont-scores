window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003729"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003729",
  "term_label": "mouth mucosa",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.458664,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "UBERON:0003729",
      "term_label": "mouth mucosa",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003729",
      "best_source_term_label": "mouth mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003729"
      ],
      "supporting_source_term_labels": [
        "mouth mucosa"
      ],
      "supporting_source_node_names": [
        "Dysregulated Th1/Th17 cytokine signaling with IL-12/23 and TNF-\u03b1 involvement",
        "Non-caseating granulomatous inflammation with epithelioid histiocytes"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "UBERON:0003729",
      "term_label": "mouth mucosa",
      "score": 0.327869,
      "direct_score": 0.327869,
      "propagated_score": 0.327869,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003729",
      "best_source_term_label": "mouth mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003729"
      ],
      "supporting_source_term_labels": [
        "mouth mucosa"
      ],
      "supporting_source_node_names": [
        "Enteroviral mucocutaneous injury"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0003729",
      "term_label": "mouth mucosa",
      "score": 0.048123,
      "direct_score": 0.0,
      "propagated_score": 0.058333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003343",
      "best_source_term_label": "mucosa of oral region",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003343"
      ],
      "supporting_source_term_labels": [
        "mucosa of oral region"
      ],
      "supporting_source_node_names": [
        "Mucosal Origins and Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003729" } }));
