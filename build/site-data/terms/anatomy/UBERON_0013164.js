window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0013164"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0013164",
  "term_label": "molariform tooth",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.245,
  "mean_score": 0.245,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0013164",
      "term_label": "molariform tooth",
      "score": 0.245,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0013164" } }));
