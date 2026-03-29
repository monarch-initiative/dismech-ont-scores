window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043066"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043066",
  "term_label": "negative regulation of apoptotic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.228571,
  "mean_score": 0.181853,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "PIK3CA-Mutant Breast Cancer",
      "disease_term_id": "MONDO:0004989",
      "source_file": "PIK3CA_Mutant_Breast_Cancer.yaml",
      "term_id": "GO:0043066",
      "term_label": "negative regulation of apoptotic process",
      "score": 0.228571,
      "direct_score": 0.228571,
      "propagated_score": 0.228571,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0043066",
      "term_label": "negative regulation of apoptotic process",
      "score": 0.135135,
      "direct_score": 0.135135,
      "propagated_score": 0.135135,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043066" } }));
