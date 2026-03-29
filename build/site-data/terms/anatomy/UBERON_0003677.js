window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003677"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003677",
  "term_label": "tooth root",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "UBERON:0003677",
      "term_label": "tooth root",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003677",
      "best_source_term_label": "tooth root",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003677"
      ],
      "supporting_source_term_labels": [
        "tooth root"
      ],
      "supporting_source_node_names": [
        "Axin1-AKT1-mTORC1-Shh translational dysregulation in HERS",
        "Epithelial WNT10A-dependent root furcation failure",
        "Failed invagination of Hertwig epithelial root sheath diaphragm",
        "KCTD1-associated WNT-SHH-BMP signaling perturbation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0003677",
      "term_label": "tooth root",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003677",
      "best_source_term_label": "tooth root",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003677"
      ],
      "supporting_source_term_labels": [
        "tooth root"
      ],
      "supporting_source_node_names": [
        "Odontogenic Source Infection (Mandibular Molar)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003677" } }));
