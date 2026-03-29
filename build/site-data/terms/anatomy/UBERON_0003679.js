window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003679"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003679",
  "term_label": "mouth floor",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0003679",
      "term_label": "mouth floor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003679",
      "best_source_term_label": "mouth floor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003679"
      ],
      "supporting_source_term_labels": [
        "mouth floor"
      ],
      "supporting_source_node_names": [
        "Polymicrobial Cellulitis of Mouth Floor",
        "Tongue Elevation and Airway Narrowing from Floor Edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003679" } }));
