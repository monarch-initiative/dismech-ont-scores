window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003672"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003672",
  "term_label": "dentition",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.260532,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ehlers-Danlos Syndrome",
      "disease_term_id": "MONDO:0020066",
      "source_file": "Ehlers-Danlos_Syndrome.yaml",
      "term_id": "UBERON:0003672",
      "term_label": "dentition",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001758",
      "best_source_term_label": "periodontium",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001758"
      ],
      "supporting_source_term_labels": [
        "periodontium"
      ],
      "supporting_source_node_names": [
        "Complement-Mediated ECM Degradation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0003672",
      "term_label": "dentition",
      "score": 0.07628,
      "direct_score": 0.0,
      "propagated_score": 0.08575,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.1715,
      "best_source_path": "is_a > part_of > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003672" } }));
