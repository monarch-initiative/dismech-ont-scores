window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012486"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012486",
  "term_label": "Myelitis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lyme Disease",
      "disease_term_id": "MONDO:0019632",
      "source_file": "Lyme_Disease.yaml",
      "term_id": "HP:0012486",
      "term_label": "Myelitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0012486",
      "best_source_term_label": "Myelitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012486"
      ],
      "supporting_source_term_labels": [
        "Myelitis"
      ],
      "supporting_source_node_names": [
        "Myelitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neuromyelitis Optica Spectrum Disorder",
      "disease_term_id": "MONDO:0019100",
      "source_file": "Neuromyelitis_Optica_Spectrum_Disorder.yaml",
      "term_id": "HP:0012486",
      "term_label": "Myelitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0012486",
      "best_source_term_label": "Myelitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012486"
      ],
      "supporting_source_term_labels": [
        "Myelitis"
      ],
      "supporting_source_node_names": [
        "Longitudinally Extensive Transverse Myelitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012486" } }));
