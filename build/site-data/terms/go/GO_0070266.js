window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0070266"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0070266",
  "term_label": "necroptotic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Polymyositis",
      "disease_term_id": "MONDO:0019127",
      "source_file": "Polymyositis.yaml",
      "term_id": "GO:0070266",
      "term_label": "necroptotic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0070266",
      "best_source_term_label": "necroptotic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070266"
      ],
      "supporting_source_term_labels": [
        "necroptotic process"
      ],
      "supporting_source_node_names": [
        "Necroptosis and DAMP Release"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Influenza",
      "disease_term_id": "MONDO:0005812",
      "source_file": "Influenza.yaml",
      "term_id": "GO:0070266",
      "term_label": "necroptotic process",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0070266",
      "best_source_term_label": "necroptotic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070266"
      ],
      "supporting_source_term_labels": [
        "necroptotic process"
      ],
      "supporting_source_node_names": [
        "PANoptosis and Inflammatory Cell Death"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0070266" } }));
