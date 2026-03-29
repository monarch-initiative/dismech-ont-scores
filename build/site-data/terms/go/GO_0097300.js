window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0097300"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0097300",
  "term_label": "programmed necrotic cell death",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.577478,
  "mean_score": 0.452185,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Polymyositis",
      "disease_term_id": "MONDO:0019127",
      "source_file": "Polymyositis.yaml",
      "term_id": "GO:0097300",
      "term_label": "programmed necrotic cell death",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0070266",
      "best_source_term_label": "necroptotic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0097300",
      "term_label": "programmed necrotic cell death",
      "score": 0.556854,
      "direct_score": 0.5,
      "propagated_score": 0.675,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0097300",
      "best_source_term_label": "programmed necrotic cell death",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070266",
        "GO:0097300"
      ],
      "supporting_source_term_labels": [
        "necroptotic process",
        "programmed necrotic cell death"
      ],
      "supporting_source_node_names": [
        "PANoptosis and Inflammatory Cell Death"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "GO:0097300",
      "term_label": "programmed necrotic cell death",
      "score": 0.222222,
      "direct_score": 0.222222,
      "propagated_score": 0.222222,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0097300",
      "best_source_term_label": "programmed necrotic cell death",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0097300"
      ],
      "supporting_source_term_labels": [
        "programmed necrotic cell death"
      ],
      "supporting_source_node_names": [
        "Ischemic Tubular Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0097300" } }));
