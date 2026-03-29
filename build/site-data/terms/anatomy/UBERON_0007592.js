window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0007592"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0007592",
  "term_label": "ciliated columnar epithelium",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.175172,
  "mean_score": 0.175172,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0007592",
      "term_label": "ciliated columnar epithelium",
      "score": 0.175172,
      "direct_score": 0.0,
      "propagated_score": 0.175172,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004802",
      "best_source_term_label": "respiratory tract epithelium",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004802",
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium",
        "respiratory tract epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0007592" } }));
