window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001710"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001710",
  "term_label": "lower jaw region",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4375,
  "mean_score": 0.4375,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0001710",
      "term_label": "lower jaw region",
      "score": 0.4375,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001736",
        "UBERON:0003667"
      ],
      "supporting_source_term_labels": [
        "lower jaw molar",
        "submandibular gland"
      ],
      "supporting_source_node_names": [
        "Cervical Fascial Spread Across Submandibular-Sublingual Spaces",
        "Odontogenic Source Infection (Mandibular Molar)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001710" } }));
