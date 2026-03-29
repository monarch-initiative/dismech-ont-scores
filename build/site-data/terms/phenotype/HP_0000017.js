window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000017"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000017",
  "term_label": "Nocturia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Obstructive Sleep Apnea",
      "disease_term_id": "MONDO:0007147",
      "source_file": "Obstructive_Sleep_Apnea.yaml",
      "term_id": "HP:0000017",
      "term_label": "Nocturia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000017",
      "best_source_term_label": "Nocturia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000017"
      ],
      "supporting_source_term_labels": [
        "Nocturia"
      ],
      "supporting_source_node_names": [
        "Nocturia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Benign Prostatic Hyperplasia",
      "disease_term_id": "MONDO:0010811",
      "source_file": "Benign_Prostatic_Hyperplasia.yaml",
      "term_id": "HP:0000017",
      "term_label": "Nocturia",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000017",
      "best_source_term_label": "Nocturia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000017"
      ],
      "supporting_source_term_labels": [
        "Nocturia"
      ],
      "supporting_source_node_names": [
        "Nocturia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000017" } }));
