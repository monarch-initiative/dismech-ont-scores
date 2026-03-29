window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000124"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000124",
  "term_label": "Renal tubular dysfunction",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.801411,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "HP:0000124",
      "term_label": "Renal tubular dysfunction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000124",
      "best_source_term_label": "Renal tubular dysfunction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000124"
      ],
      "supporting_source_term_labels": [
        "Renal tubular dysfunction"
      ],
      "supporting_source_node_names": [
        "Renal Tubular Dysfunction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "HP:0000124",
      "term_label": "Renal tubular dysfunction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000124",
      "best_source_term_label": "Renal tubular dysfunction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000124"
      ],
      "supporting_source_term_labels": [
        "Renal tubular dysfunction"
      ],
      "supporting_source_node_names": [
        "Renal Tubular Dysfunction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "HP:0000124",
      "term_label": "Renal tubular dysfunction",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001994",
      "best_source_term_label": "Renal Fanconi syndrome",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001994"
      ],
      "supporting_source_term_labels": [
        "Renal Fanconi syndrome"
      ],
      "supporting_source_node_names": [
        "Renal tubular dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000124" } }));
