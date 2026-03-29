window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003408"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003408",
  "term_label": "gland of digestive tract",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.225688,
  "mean_score": 0.225688,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0003408",
      "term_label": "gland of digestive tract",
      "score": 0.225688,
      "direct_score": 0.0,
      "propagated_score": 0.225688,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001832",
      "best_source_term_label": "sublingual gland",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001736",
        "UBERON:0001832"
      ],
      "supporting_source_term_labels": [
        "sublingual gland",
        "submandibular gland"
      ],
      "supporting_source_node_names": [
        "Cervical Fascial Spread Across Submandibular-Sublingual Spaces"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003408" } }));
