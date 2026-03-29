window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003251"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003251",
  "term_label": "Male infertility",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.804878,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0003251",
      "term_label": "Male infertility",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003251",
      "best_source_term_label": "Male infertility",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003251"
      ],
      "supporting_source_term_labels": [
        "Male infertility"
      ],
      "supporting_source_node_names": [
        "Male Infertility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0003251",
      "term_label": "Male infertility",
      "score": 0.609756,
      "direct_score": 0.609756,
      "propagated_score": 0.609756,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003251",
      "best_source_term_label": "Male infertility",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003251"
      ],
      "supporting_source_term_labels": [
        "Male infertility"
      ],
      "supporting_source_node_names": [
        "Male Infertility"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003251" } }));
