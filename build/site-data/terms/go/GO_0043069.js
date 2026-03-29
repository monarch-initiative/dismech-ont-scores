window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043069"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043069",
  "term_label": "negative regulation of programmed cell death",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.142331,
  "mean_score": 0.11324,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "PIK3CA-Mutant Breast Cancer",
      "disease_term_id": "MONDO:0004989",
      "source_file": "PIK3CA_Mutant_Breast_Cancer.yaml",
      "term_id": "GO:0043069",
      "term_label": "negative regulation of programmed cell death",
      "score": 0.142331,
      "direct_score": 0.0,
      "propagated_score": 0.16,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043066"
      ],
      "supporting_source_term_labels": [
        "negative regulation of apoptotic process"
      ],
      "supporting_source_node_names": [
        "Cell Survival and Proliferation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cowden Syndrome",
      "disease_term_id": "MONDO:0016063",
      "source_file": "Cowden_Syndrome.yaml",
      "term_id": "GO:0043069",
      "term_label": "negative regulation of programmed cell death",
      "score": 0.084148,
      "direct_score": 0.0,
      "propagated_score": 0.094595,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043066"
      ],
      "supporting_source_term_labels": [
        "negative regulation of apoptotic process"
      ],
      "supporting_source_node_names": [
        "PTEN Loss and PI3K/AKT/mTOR Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043069" } }));
