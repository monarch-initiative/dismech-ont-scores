window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0007108"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0007108",
  "term_label": "Demyelinating peripheral neuropathy",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "HP:0007108",
      "term_label": "Demyelinating peripheral neuropathy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0007108",
      "best_source_term_label": "Demyelinating peripheral neuropathy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007108"
      ],
      "supporting_source_term_labels": [
        "Demyelinating peripheral neuropathy"
      ],
      "supporting_source_node_names": [
        "Peripheral Neuropathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "HP:0007108",
      "term_label": "Demyelinating peripheral neuropathy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0007108",
      "best_source_term_label": "Demyelinating peripheral neuropathy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007108"
      ],
      "supporting_source_term_labels": [
        "Demyelinating peripheral neuropathy"
      ],
      "supporting_source_node_names": [
        "Peripheral Neuropathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0007108" } }));
