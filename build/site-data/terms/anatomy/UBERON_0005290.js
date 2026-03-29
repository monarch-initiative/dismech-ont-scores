window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005290"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005290",
  "term_label": "myelencephalon",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.16,
  "mean_score": 0.16,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0005290",
      "term_label": "myelencephalon",
      "score": 0.16,
      "direct_score": 0.0,
      "propagated_score": 0.16,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001896",
      "best_source_term_label": "medulla oblongata",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005290" } }));
