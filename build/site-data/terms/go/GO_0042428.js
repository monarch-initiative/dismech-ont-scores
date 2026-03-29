window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042428"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042428",
  "term_label": "serotonin metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.512,
  "mean_score": 0.384205,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0042428",
      "term_label": "serotonin metabolic process",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042428",
      "best_source_term_label": "serotonin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042428"
      ],
      "supporting_source_term_labels": [
        "serotonin metabolic process"
      ],
      "supporting_source_node_names": [
        "Reduced Serotonin Biosynthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0042428",
      "term_label": "serotonin metabolic process",
      "score": 0.25641,
      "direct_score": 0.25641,
      "propagated_score": 0.25641,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042428",
      "best_source_term_label": "serotonin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042428"
      ],
      "supporting_source_term_labels": [
        "serotonin metabolic process"
      ],
      "supporting_source_node_names": [
        "Serotonin Depletion Mechanisms"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042428" } }));
