window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001708"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001708",
  "term_label": "jaw skeleton",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.111196,
  "mean_score": 0.075057,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "UBERON:0001708",
      "term_label": "jaw skeleton",
      "score": 0.111196,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001764",
      "best_source_term_label": "maxillary sinus",
      "best_source_path_score": 0.125,
      "best_source_path": "part_of > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "UBERON:0001764"
      ],
      "supporting_source_term_labels": [
        "maxillary sinus"
      ],
      "supporting_source_node_names": [
        "Maxillary Sinus Atelectasis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0001708",
      "term_label": "jaw skeleton",
      "score": 0.038919,
      "direct_score": 0.0,
      "propagated_score": 0.04375,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.0875,
      "best_source_path": "is_a > part_of > part_of > part_of",
      "best_path_hops": 4,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "UBERON:0003667"
      ],
      "supporting_source_term_labels": [
        "lower jaw molar"
      ],
      "supporting_source_node_names": [
        "Odontogenic Source Infection (Mandibular Molar)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001708" } }));
