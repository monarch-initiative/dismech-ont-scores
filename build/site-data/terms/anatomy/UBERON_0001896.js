window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001896"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001896",
  "term_label": "medulla oblongata",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.32,
  "mean_score": 0.32,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0001896",
      "term_label": "medulla oblongata",
      "score": 0.32,
      "direct_score": 0.32,
      "propagated_score": 0.32,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001896",
      "best_source_term_label": "medulla oblongata",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001896"
      ],
      "supporting_source_term_labels": [
        "medulla oblongata"
      ],
      "supporting_source_node_names": [
        "Brainstem Sneeze Circuit"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001896" } }));
