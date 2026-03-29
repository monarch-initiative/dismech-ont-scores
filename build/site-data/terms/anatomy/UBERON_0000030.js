window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000030"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000030",
  "term_label": "lamina propria",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.577837,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "UBERON:0000030",
      "term_label": "lamina propria",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000030",
      "best_source_term_label": "lamina propria",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000030"
      ],
      "supporting_source_term_labels": [
        "lamina propria"
      ],
      "supporting_source_node_names": [
        "Mucosal immune activation with intraepithelial lymphocytosis",
        "Subepithelial collagen deposition and fibrotic remodeling"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0000030",
      "term_label": "lamina propria",
      "score": 0.155674,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001238",
      "best_source_term_label": "lamina propria of small intestine",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001238"
      ],
      "supporting_source_term_labels": [
        "lamina propria of small intestine"
      ],
      "supporting_source_node_names": [
        "Macrophage Autophagy Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000030" } }));
