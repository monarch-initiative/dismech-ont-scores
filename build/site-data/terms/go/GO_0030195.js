window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030195"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030195",
  "term_label": "negative regulation of blood coagulation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.598747,
  "mean_score": 0.350385,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0030195",
      "term_label": "negative regulation of blood coagulation",
      "score": 0.598747,
      "direct_score": 0.0,
      "propagated_score": 0.673077,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042730",
      "best_source_term_label": "fibrinolysis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0030195",
      "term_label": "negative regulation of blood coagulation",
      "score": 0.102023,
      "direct_score": 0.0,
      "propagated_score": 0.114688,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042730",
      "best_source_term_label": "fibrinolysis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030195" } }));
