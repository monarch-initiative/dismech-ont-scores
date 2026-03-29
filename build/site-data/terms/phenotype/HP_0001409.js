window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001409"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001409",
  "term_label": "Portal hypertension",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0001409",
      "term_label": "Portal hypertension",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001409",
      "best_source_term_label": "Portal hypertension",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001409"
      ],
      "supporting_source_term_labels": [
        "Portal hypertension"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Joubert syndrome",
      "disease_term_id": "MONDO:0018772",
      "source_file": "Joubert_syndrome.yaml",
      "term_id": "HP:0001409",
      "term_label": "Portal hypertension",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001409",
      "best_source_term_label": "Portal hypertension",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001409"
      ],
      "supporting_source_term_labels": [
        "Portal hypertension"
      ],
      "supporting_source_node_names": [
        "Portal hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001409" } }));
