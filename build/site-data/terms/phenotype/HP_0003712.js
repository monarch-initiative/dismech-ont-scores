window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003712"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003712",
  "term_label": "Skeletal muscle hypertrophy",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "HP:0003712",
      "term_label": "Skeletal muscle hypertrophy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000158",
      "best_source_term_label": "Macroglossia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000158"
      ],
      "supporting_source_term_labels": [
        "Macroglossia"
      ],
      "supporting_source_node_names": [
        "Lingual swelling and macroglossia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pompe Disease",
      "disease_term_id": "MONDO:0009290",
      "source_file": "Pompe_Disease.yaml",
      "term_id": "HP:0003712",
      "term_label": "Skeletal muscle hypertrophy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000158",
      "best_source_term_label": "Macroglossia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000158"
      ],
      "supporting_source_term_labels": [
        "Macroglossia"
      ],
      "supporting_source_node_names": [
        "Macroglossia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003712" } }));
