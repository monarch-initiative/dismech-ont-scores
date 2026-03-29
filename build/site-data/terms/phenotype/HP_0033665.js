window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033665"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033665",
  "term_label": "Diminished health-related quality of life",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "FICUS syndrome",
      "disease_term_id": "",
      "source_file": "FICUS_syndrome.yaml",
      "term_id": "HP:0033665",
      "term_label": "Diminished health-related quality of life",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033665",
      "best_source_term_label": "Diminished health-related quality of life",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033665"
      ],
      "supporting_source_term_labels": [
        "Diminished health-related quality of life"
      ],
      "supporting_source_node_names": [
        "Diminished health-related quality of life"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hidradenitis Suppurativa",
      "disease_term_id": "MONDO:0006559",
      "source_file": "Hidradenitis_Suppurativa.yaml",
      "term_id": "HP:0033665",
      "term_label": "Diminished health-related quality of life",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033665",
      "best_source_term_label": "Diminished health-related quality of life",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033665"
      ],
      "supporting_source_term_labels": [
        "Diminished health-related quality of life"
      ],
      "supporting_source_node_names": [
        "Diminished Health-Related Quality of Life"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033665" } }));
