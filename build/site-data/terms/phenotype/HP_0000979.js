window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000979"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000979",
  "term_label": "Purpura",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.392299,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Immune Thrombocytopenia",
      "disease_term_id": "MONDO:0008558",
      "source_file": "Immune_Thrombocytopenia.yaml",
      "term_id": "HP:0000979",
      "term_label": "Purpura",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000967",
      "best_source_term_label": "Petechiae",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000967"
      ],
      "supporting_source_term_labels": [
        "Petechiae"
      ],
      "supporting_source_node_names": [
        "Petechiae"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Scurvy",
      "disease_term_id": "MONDO:0009412",
      "source_file": "Scurvy.yaml",
      "term_id": "HP:0000979",
      "term_label": "Purpura",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000967",
      "best_source_term_label": "Petechiae",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000967"
      ],
      "supporting_source_term_labels": [
        "Petechiae"
      ],
      "supporting_source_node_names": [
        "Perifollicular Hemorrhages"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000979" } }));
