window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005384"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005384",
  "term_label": "nasal cavity epithelium",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0005384",
      "term_label": "nasal cavity epithelium",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0005384",
      "best_source_term_label": "nasal cavity epithelium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005384" } }));
