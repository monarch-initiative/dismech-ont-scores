window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000126"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000126",
  "term_label": "cranial nerve nucleus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.224,
  "mean_score": 0.224,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0000126",
      "term_label": "cranial nerve nucleus",
      "score": 0.224,
      "direct_score": 0.0,
      "propagated_score": 0.224,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002925",
      "best_source_term_label": "trigeminal nucleus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002925"
      ],
      "supporting_source_term_labels": [
        "trigeminal nucleus"
      ],
      "supporting_source_node_names": [
        "Brainstem Sneeze Circuit"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000126" } }));
