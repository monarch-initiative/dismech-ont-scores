window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006311"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006311",
  "term_label": "chamber of eyeball",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.389185,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "UBERON:0006311",
      "term_label": "chamber of eyeball",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001766",
      "best_source_term_label": "anterior chamber of eyeball",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001766"
      ],
      "supporting_source_term_labels": [
        "anterior chamber of eyeball"
      ],
      "supporting_source_node_names": [
        "Elevated Intraocular Pressure"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0006311",
      "term_label": "chamber of eyeball",
      "score": 0.155674,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001797",
      "best_source_term_label": "vitreous humor",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006311" } }));
