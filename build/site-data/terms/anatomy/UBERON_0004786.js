window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004786"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004786",
  "term_label": "gastrointestinal system mucosa",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.384985,
  "mean_score": 0.208218,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0004786",
      "term_label": "gastrointestinal system mucosa",
      "score": 0.384985,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "UBERON:0004786",
      "term_label": "gastrointestinal system mucosa",
      "score": 0.191547,
      "direct_score": 0.0,
      "propagated_score": 0.232187,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001238",
      "best_source_term_label": "lamina propria of small intestine",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0004786",
      "term_label": "gastrointestinal system mucosa",
      "score": 0.048123,
      "direct_score": 0.0,
      "propagated_score": 0.058333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004786" } }));
