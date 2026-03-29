window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0035775"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0035775",
  "term_label": "submandibular region",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0035775",
      "term_label": "submandibular region",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0035775",
      "best_source_term_label": "submandibular region",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0035775"
      ],
      "supporting_source_term_labels": [
        "submandibular region"
      ],
      "supporting_source_node_names": [
        "Polymicrobial Cellulitis of Mouth Floor"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0035775" } }));
