window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004663"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004663",
  "term_label": "aorta wall",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.322115,
  "mean_score": 0.322115,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0004663",
      "term_label": "aorta wall",
      "score": 0.322115,
      "direct_score": 0.0,
      "propagated_score": 0.322115,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003618",
      "best_source_term_label": "aorta tunica media",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003618",
        "UBERON:0003619"
      ],
      "supporting_source_term_labels": [
        "aorta tunica intima",
        "aorta tunica media"
      ],
      "supporting_source_node_names": [
        "Extracellular Matrix Remodeling",
        "Vascular Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004663" } }));
