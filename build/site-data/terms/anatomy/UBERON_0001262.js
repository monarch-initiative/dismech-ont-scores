window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001262"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001262",
  "term_label": "wall of intestine",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.268132,
  "mean_score": 0.164425,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001262",
      "term_label": "wall of intestine",
      "score": 0.268132,
      "direct_score": 0.178571,
      "propagated_score": 0.344141,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001262",
      "best_source_term_label": "wall of intestine",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001238",
        "UBERON:0001262",
        "UBERON:0003346"
      ],
      "supporting_source_term_labels": [
        "lamina propria of small intestine",
        "mucosa of rectum",
        "wall of intestine"
      ],
      "supporting_source_node_names": [
        "Fibrosis and Stricture Formation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0001262",
      "term_label": "wall of intestine",
      "score": 0.259711,
      "direct_score": 0.0,
      "propagated_score": 0.333333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "UBERON:0001262",
      "term_label": "wall of intestine",
      "score": 0.097392,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002439",
      "best_source_term_label": "myenteric nerve plexus",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0002439"
      ],
      "supporting_source_term_labels": [
        "myenteric nerve plexus"
      ],
      "supporting_source_node_names": [
        "Failure of Enteric Ganglion Cell Migration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0001262",
      "term_label": "wall of intestine",
      "score": 0.032464,
      "direct_score": 0.0,
      "propagated_score": 0.041667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001242",
      "best_source_term_label": "intestinal mucosa",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001262" } }));
