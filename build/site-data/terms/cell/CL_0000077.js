window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000077"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000077",
  "term_label": "mesothelial cell",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.543589,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Malignant Mesothelioma",
      "disease_term_id": "MONDO:0006292",
      "source_file": "Malignant_Mesothelioma.yaml",
      "term_id": "CL:0000077",
      "term_label": "mesothelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000077",
      "best_source_term_label": "mesothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000077"
      ],
      "supporting_source_term_labels": [
        "mesothelial cell"
      ],
      "supporting_source_node_names": [
        "Asbestos-Induced Mesothelial Injury"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "CL:0000077",
      "term_label": "mesothelial cell",
      "score": 0.087178,
      "direct_score": 0.0,
      "propagated_score": 0.098,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000216",
      "best_source_term_label": "Sertoli cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000216"
      ],
      "supporting_source_term_labels": [
        "Sertoli cell"
      ],
      "supporting_source_node_names": [
        "Testicular Microenvironment Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000077" } }));
