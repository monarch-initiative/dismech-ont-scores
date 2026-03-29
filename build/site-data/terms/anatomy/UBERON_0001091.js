window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001091"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001091",
  "term_label": "calcareous tooth",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.55598,
  "mean_score": 0.446396,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "UBERON:0001091",
      "term_label": "calcareous tooth",
      "score": 0.55598,
      "direct_score": 0.25,
      "propagated_score": 0.625,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003677",
      "best_source_term_label": "tooth root",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001091",
        "UBERON:0003677"
      ],
      "supporting_source_term_labels": [
        "calcareous tooth",
        "tooth root"
      ],
      "supporting_source_node_names": [
        "WNT10A-associated molar crown and root dysmorphology in humans"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0001091",
      "term_label": "calcareous tooth",
      "score": 0.336812,
      "direct_score": 0.0,
      "propagated_score": 0.378625,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003677",
      "best_source_term_label": "tooth root",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003667",
        "UBERON:0003677"
      ],
      "supporting_source_term_labels": [
        "lower jaw molar",
        "tooth root"
      ],
      "supporting_source_node_names": [
        "Odontogenic Source Infection (Mandibular Molar)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001091" } }));
