window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0031647"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0031647",
  "term_label": "regulation of protein stability",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.78125,
  "mean_score": 0.639704,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Angelman Syndrome",
      "disease_term_id": "MONDO:0007113",
      "source_file": "Angelman_Syndrome.yaml",
      "term_id": "GO:0031647",
      "term_label": "regulation of protein stability",
      "score": 0.78125,
      "direct_score": 0.78125,
      "propagated_score": 0.78125,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0031647",
      "best_source_term_label": "regulation of protein stability",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0031647"
      ],
      "supporting_source_term_labels": [
        "regulation of protein stability"
      ],
      "supporting_source_node_names": [
        "Decreased UBE3A-mediated protein ubiquitination"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Clear Cell Renal Cell Carcinoma",
      "disease_term_id": "MONDO:0005005",
      "source_file": "Clear_Cell_Renal_Cell_Carcinoma.yaml",
      "term_id": "GO:0031647",
      "term_label": "regulation of protein stability",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0050821",
      "best_source_term_label": "protein stabilization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050821"
      ],
      "supporting_source_term_labels": [
        "protein stabilization"
      ],
      "supporting_source_node_names": [
        "HIF-2\u03b1 Stabilization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0031647" } }));
