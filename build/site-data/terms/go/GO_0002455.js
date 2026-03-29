window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002455"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002455",
  "term_label": "humoral immune response mediated by circulating immunoglobulin",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.315092,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Neuromyelitis Optica Spectrum Disorder",
      "disease_term_id": "MONDO:0019100",
      "source_file": "Neuromyelitis_Optica_Spectrum_Disorder.yaml",
      "term_id": "GO:0002455",
      "term_label": "humoral immune response mediated by circulating immunoglobulin",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006958",
      "best_source_term_label": "complement activation, classical pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006958"
      ],
      "supporting_source_term_labels": [
        "complement activation, classical pathway"
      ],
      "supporting_source_node_names": [
        "Complement-Mediated Astrocyte Destruction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "GO:0002455",
      "term_label": "humoral immune response mediated by circulating immunoglobulin",
      "score": 0.274989,
      "direct_score": 0.0,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006958",
      "best_source_term_label": "complement activation, classical pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006958"
      ],
      "supporting_source_term_labels": [
        "complement activation, classical pathway"
      ],
      "supporting_source_node_names": [
        "Complement Pathway Dysregulation",
        "Formation of Immune Complexes"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ehlers-Danlos Syndrome",
      "disease_term_id": "MONDO:0020066",
      "source_file": "Ehlers-Danlos_Syndrome.yaml",
      "term_id": "GO:0002455",
      "term_label": "humoral immune response mediated by circulating immunoglobulin",
      "score": 0.257803,
      "direct_score": 0.0,
      "propagated_score": 0.3125,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006958",
      "best_source_term_label": "complement activation, classical pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006958"
      ],
      "supporting_source_term_labels": [
        "complement activation, classical pathway"
      ],
      "supporting_source_node_names": [
        "Complement-Mediated ECM Degradation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002455" } }));
