window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010564"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010564",
  "term_label": "Bifid epiglottis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pallister-Hall Syndrome",
      "disease_term_id": "MONDO:0007804",
      "source_file": "Pallister-Hall_Syndrome.yaml",
      "term_id": "HP:0010564",
      "term_label": "Bifid epiglottis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0010564",
      "best_source_term_label": "Bifid epiglottis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010564"
      ],
      "supporting_source_term_labels": [
        "Bifid epiglottis"
      ],
      "supporting_source_node_names": [
        "Bifid Epiglottis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010564" } }));
