window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000902"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000902",
  "term_label": "cell morphogenesis",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.288739,
  "mean_score": 0.240616,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0000902",
      "term_label": "cell morphogenesis",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003382",
      "best_source_term_label": "epithelial cell morphogenesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003382"
      ],
      "supporting_source_term_labels": [
        "epithelial cell morphogenesis"
      ],
      "supporting_source_node_names": [
        "Hamartomatous polyp formation in the gastrointestinal tract"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Immune Thrombocytopenia",
      "disease_term_id": "MONDO:0008558",
      "source_file": "Immune_Thrombocytopenia.yaml",
      "term_id": "GO:0000902",
      "term_label": "cell morphogenesis",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030220",
      "best_source_term_label": "platelet formation",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0030220"
      ],
      "supporting_source_term_labels": [
        "platelet formation"
      ],
      "supporting_source_node_names": [
        "Impaired Megakaryopoiesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0000902",
      "term_label": "cell morphogenesis",
      "score": 0.144369,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007409",
      "best_source_term_label": "axonogenesis",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007409"
      ],
      "supporting_source_term_labels": [
        "axonogenesis"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000902" } }));
