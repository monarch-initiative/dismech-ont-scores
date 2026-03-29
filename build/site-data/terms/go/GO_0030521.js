window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030521"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030521",
  "term_label": "androgen receptor signaling pathway",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Benign Prostatic Hyperplasia",
      "disease_term_id": "MONDO:0010811",
      "source_file": "Benign_Prostatic_Hyperplasia.yaml",
      "term_id": "GO:0030521",
      "term_label": "androgen receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030521",
      "best_source_term_label": "androgen receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030521"
      ],
      "supporting_source_term_labels": [
        "androgen receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Androgen-Dependent Growth"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Metastatic Prostate Cancer",
      "disease_term_id": "MONDO:0008315",
      "source_file": "Metastatic_Prostate_Cancer.yaml",
      "term_id": "GO:0030521",
      "term_label": "androgen receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030521",
      "best_source_term_label": "androgen receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030521"
      ],
      "supporting_source_term_labels": [
        "androgen receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Persistent Androgen Receptor Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030521" } }));
