window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006707"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006707",
  "term_label": "Abnormality of the hepatic vasculature",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0006707",
      "term_label": "Abnormality of the hepatic vasculature",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001409",
      "best_source_term_label": "Portal hypertension",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:0006707",
      "term_label": "Abnormality of the hepatic vasculature",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001409",
      "best_source_term_label": "Portal hypertension",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006707" } }));
