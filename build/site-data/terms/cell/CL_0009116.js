window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0009116"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0009116",
  "term_label": "progenitor cell of mammary luminal epithelium",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.329987,
  "mean_score": 0.329987,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "ER-Positive Breast Cancer",
      "disease_term_id": "MONDO:0021116",
      "source_file": "ER_Positive_Breast_Cancer.yaml",
      "term_id": "CL:0009116",
      "term_label": "progenitor cell of mammary luminal epithelium",
      "score": 0.329987,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002326",
      "best_source_term_label": "luminal epithelial cell of mammary gland",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002326"
      ],
      "supporting_source_term_labels": [
        "luminal epithelial cell of mammary gland"
      ],
      "supporting_source_node_names": [
        "Estrogen Receptor Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "HER2-Positive Breast Cancer",
      "disease_term_id": "MONDO:0006244",
      "source_file": "HER2_Positive_Breast_Cancer.yaml",
      "term_id": "CL:0009116",
      "term_label": "progenitor cell of mammary luminal epithelium",
      "score": 0.329987,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002326",
      "best_source_term_label": "luminal epithelial cell of mammary gland",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002326"
      ],
      "supporting_source_term_labels": [
        "luminal epithelial cell of mammary gland"
      ],
      "supporting_source_node_names": [
        "ERBB2 Gene Amplification"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "PIK3CA-Mutant Breast Cancer",
      "disease_term_id": "MONDO:0004989",
      "source_file": "PIK3CA_Mutant_Breast_Cancer.yaml",
      "term_id": "CL:0009116",
      "term_label": "progenitor cell of mammary luminal epithelium",
      "score": 0.329987,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002326",
      "best_source_term_label": "luminal epithelial cell of mammary gland",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002326"
      ],
      "supporting_source_term_labels": [
        "luminal epithelial cell of mammary gland"
      ],
      "supporting_source_node_names": [
        "PIK3CA Oncogenic Mutations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0009116" } }));
