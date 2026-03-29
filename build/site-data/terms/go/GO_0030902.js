window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030902"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030902",
  "term_label": "hindbrain development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.08,
  "mean_score": 0.08,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Medulloblastoma, SHH-Activated",
      "disease_term_id": "MONDO:0850197",
      "source_file": "Medulloblastoma_SHH_Activated.yaml",
      "term_id": "GO:0030902",
      "term_label": "hindbrain development",
      "score": 0.08,
      "direct_score": 0.0,
      "propagated_score": 0.08,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0021549",
      "best_source_term_label": "cerebellum development",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0021549"
      ],
      "supporting_source_term_labels": [
        "cerebellum development"
      ],
      "supporting_source_node_names": [
        "Cerebellar Granule Cell Proliferation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030902" } }));
