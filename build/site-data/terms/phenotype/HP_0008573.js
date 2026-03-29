window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008573"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008573",
  "term_label": "Low-frequency sensorineural hearing impairment",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Meniere's Disease",
      "disease_term_id": "MONDO:0007972",
      "source_file": "Menieres_Disease.yaml",
      "term_id": "HP:0008573",
      "term_label": "Low-frequency sensorineural hearing impairment",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0008573",
      "best_source_term_label": "Low-frequency sensorineural hearing impairment",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008573"
      ],
      "supporting_source_term_labels": [
        "Low-frequency sensorineural hearing impairment"
      ],
      "supporting_source_node_names": [
        "Sensorineural Hearing Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008573" } }));
