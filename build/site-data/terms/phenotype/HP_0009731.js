window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009731"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009731",
  "term_label": "Cerebral hamartoma",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.809506,
  "mean_score": 0.716101,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0009731",
      "term_label": "Cerebral hamartoma",
      "score": 0.809506,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009717",
      "best_source_term_label": "Cortical tubers",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009716",
        "HP:0009717"
      ],
      "supporting_source_term_labels": [
        "Cortical tubers",
        "Subependymal nodules"
      ],
      "supporting_source_node_names": [
        "Cortical Tubers",
        "Subependymal Nodules"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pallister-Hall Syndrome",
      "disease_term_id": "MONDO:0007804",
      "source_file": "Pallister-Hall_Syndrome.yaml",
      "term_id": "HP:0009731",
      "term_label": "Cerebral hamartoma",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002444",
      "best_source_term_label": "Hypothalamic hamartoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002444"
      ],
      "supporting_source_term_labels": [
        "Hypothalamic hamartoma"
      ],
      "supporting_source_node_names": [
        "Hypothalamic Hamartoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009731" } }));
