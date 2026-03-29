window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000956"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000956",
  "term_label": "Acanthosis nigricans",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Crouzon Syndrome with Acanthosis Nigricans",
      "disease_term_id": "MONDO:0012833",
      "source_file": "Crouzon_Syndrome_with_Acanthosis_Nigricans.yaml",
      "term_id": "HP:0000956",
      "term_label": "Acanthosis nigricans",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000956",
      "best_source_term_label": "Acanthosis nigricans",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000956"
      ],
      "supporting_source_term_labels": [
        "Acanthosis nigricans"
      ],
      "supporting_source_node_names": [
        "Acanthosis Nigricans"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SADDAN",
      "disease_term_id": "MONDO:0014658",
      "source_file": "SADDAN.yaml",
      "term_id": "HP:0000956",
      "term_label": "Acanthosis nigricans",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000956",
      "best_source_term_label": "Acanthosis nigricans",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000956"
      ],
      "supporting_source_term_labels": [
        "Acanthosis nigricans"
      ],
      "supporting_source_node_names": [
        "Acanthosis nigricans"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000956" } }));
