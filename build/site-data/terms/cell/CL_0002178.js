window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002178"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002178",
  "term_label": "epithelial cell of stomach",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Gastric Cancer H. pylori Associated",
      "disease_term_id": "MONDO:0004950",
      "source_file": "Gastric_Cancer_H_pylori_Associated.yaml",
      "term_id": "CL:0002178",
      "term_label": "epithelial cell of stomach",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002178",
      "best_source_term_label": "epithelial cell of stomach",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002178"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of stomach"
      ],
      "supporting_source_node_names": [
        "CagA-Mediated Oncogenic Signaling"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "HER2-Positive Gastric Cancer",
      "disease_term_id": "MONDO:0001056",
      "source_file": "HER2_Positive_Gastric_Cancer.yaml",
      "term_id": "CL:0002178",
      "term_label": "epithelial cell of stomach",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002178",
      "best_source_term_label": "epithelial cell of stomach",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002178"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of stomach"
      ],
      "supporting_source_node_names": [
        "ERBB2 (HER2) Amplification and Overexpression"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002178" } }));
