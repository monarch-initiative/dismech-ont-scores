window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0410030"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0410030",
  "term_label": "Cleft lip",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Orofaciodigital Syndrome Type I",
      "disease_term_id": "MONDO:0010702",
      "source_file": "Orofaciodigital_Syndrome_Type_I.yaml",
      "term_id": "HP:0410030",
      "term_label": "Cleft lip",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000161",
      "best_source_term_label": "Median cleft upper lip",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000161"
      ],
      "supporting_source_term_labels": [
        "Median cleft upper lip"
      ],
      "supporting_source_node_names": [
        "Median Cleft Upper Lip"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0410030" } }));
