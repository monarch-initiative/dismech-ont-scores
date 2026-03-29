window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011595"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011595",
  "term_label": "jaw region",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.208492,
  "mean_score": 0.158732,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0011595",
      "term_label": "jaw region",
      "score": 0.208492,
      "direct_score": 0.0,
      "propagated_score": 0.234375,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "UBERON:0011595",
      "term_label": "jaw region",
      "score": 0.108972,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001764",
      "best_source_term_label": "maxillary sinus",
      "best_source_path_score": 0.1225,
      "best_source_path": "part_of > is_a > is_a > part_of",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001764"
      ],
      "supporting_source_term_labels": [
        "maxillary sinus"
      ],
      "supporting_source_node_names": [
        "Maxillary Sinus Atelectasis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011595" } }));
