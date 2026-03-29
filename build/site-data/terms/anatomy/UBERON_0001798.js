window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001798"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001798",
  "term_label": "vitreous body",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0001798",
      "term_label": "vitreous body",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001797",
      "best_source_term_label": "vitreous humor",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001797"
      ],
      "supporting_source_term_labels": [
        "vitreous humor"
      ],
      "supporting_source_node_names": [
        "Autoimmune T-Cell Predominant Inflammation",
        "Vitreous Cell Infiltration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001798" } }));
