window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050819"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050819",
  "term_label": "negative regulation of coagulation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.419123,
  "mean_score": 0.24527,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0050819",
      "term_label": "negative regulation of coagulation",
      "score": 0.419123,
      "direct_score": 0.0,
      "propagated_score": 0.471154,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042730",
      "best_source_term_label": "fibrinolysis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042730"
      ],
      "supporting_source_term_labels": [
        "fibrinolysis"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction and Microclots"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "GO:0050819",
      "term_label": "negative regulation of coagulation",
      "score": 0.071416,
      "direct_score": 0.0,
      "propagated_score": 0.080282,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042730",
      "best_source_term_label": "fibrinolysis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042730"
      ],
      "supporting_source_term_labels": [
        "fibrinolysis"
      ],
      "supporting_source_node_names": [
        "Impaired fibrinolysis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050819" } }));
