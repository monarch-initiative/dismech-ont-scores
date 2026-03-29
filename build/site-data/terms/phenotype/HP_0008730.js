window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008730"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008730",
  "term_label": "Female external genitalia in individual with 46,XY karyotype",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Campomelic Dysplasia",
      "disease_term_id": "MONDO:0007251",
      "source_file": "Campomelic_Dysplasia.yaml",
      "term_id": "HP:0008730",
      "term_label": "Female external genitalia in individual with 46,XY karyotype",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0008730",
      "best_source_term_label": "Female external genitalia in individual with 46,XY karyotype",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008730"
      ],
      "supporting_source_term_labels": [
        "Female external genitalia in individual with 46,XY karyotype"
      ],
      "supporting_source_node_names": [
        "Female External Genitalia in 46,XY Individual"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008730" } }));
