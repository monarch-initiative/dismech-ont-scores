window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000967"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000967",
  "term_label": "Petechiae",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Immune Thrombocytopenia",
      "disease_term_id": "MONDO:0008558",
      "source_file": "Immune_Thrombocytopenia.yaml",
      "term_id": "HP:0000967",
      "term_label": "Petechiae",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000967",
      "best_source_term_label": "Petechiae",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0000967",
      "term_label": "Petechiae",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000967",
      "best_source_term_label": "Petechiae",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000967" } }));
