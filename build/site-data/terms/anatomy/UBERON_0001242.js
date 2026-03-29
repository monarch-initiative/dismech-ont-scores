window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001242"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001242",
  "term_label": "intestinal mucosa",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.666667,
  "mean_score": 0.326481,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0001242",
      "term_label": "intestinal mucosa",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001242"
      ],
      "supporting_source_term_labels": [
        "intestinal mucosa"
      ],
      "supporting_source_node_names": [
        "Galactose-Deficient IgA1 Production"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001242",
      "term_label": "intestinal mucosa",
      "score": 0.229444,
      "direct_score": 0.0,
      "propagated_score": 0.278125,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003346",
      "best_source_term_label": "mucosa of rectum",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001238",
        "UBERON:0003346"
      ],
      "supporting_source_term_labels": [
        "lamina propria of small intestine",
        "mucosa of rectum"
      ],
      "supporting_source_node_names": [
        "Macrophage Autophagy Dysfunction",
        "TL1A-Mediated T Cell Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0001242",
      "term_label": "intestinal mucosa",
      "score": 0.083333,
      "direct_score": 0.083333,
      "propagated_score": 0.083333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001242"
      ],
      "supporting_source_term_labels": [
        "intestinal mucosa"
      ],
      "supporting_source_node_names": [
        "Mucosal Origins and Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001242" } }));
