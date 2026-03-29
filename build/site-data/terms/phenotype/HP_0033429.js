window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033429"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033429",
  "term_label": "Neuroinflammation",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.635226,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neuromyelitis Optica Spectrum Disorder",
      "disease_term_id": "MONDO:0019100",
      "source_file": "Neuromyelitis_Optica_Spectrum_Disorder.yaml",
      "term_id": "HP:0033429",
      "term_label": "Neuroinflammation",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0100653",
      "best_source_term_label": "Optic neuritis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012486",
        "HP:0100653"
      ],
      "supporting_source_term_labels": [
        "Myelitis",
        "Optic neuritis"
      ],
      "supporting_source_node_names": [
        "Longitudinally Extensive Transverse Myelitis",
        "Optic Neuritis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lyme Disease",
      "disease_term_id": "MONDO:0019632",
      "source_file": "Lyme_Disease.yaml",
      "term_id": "HP:0033429",
      "term_label": "Neuroinflammation",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012486",
      "best_source_term_label": "Myelitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Multiple Sclerosis",
      "disease_term_id": "MONDO:0005301",
      "source_file": "Multiple_Sclerosis.yaml",
      "term_id": "HP:0033429",
      "term_label": "Neuroinflammation",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0100653",
      "best_source_term_label": "Optic neuritis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100653"
      ],
      "supporting_source_term_labels": [
        "Optic neuritis"
      ],
      "supporting_source_node_names": [
        "Optic Neuritis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033429" } }));
