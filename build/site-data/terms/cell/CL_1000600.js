window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1000600"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1000600",
  "term_label": "lower urinary tract cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "FGFR-Altered Urothelial Carcinoma",
      "disease_term_id": "MONDO:0040679",
      "source_file": "FGFR_Altered_Urothelial_Carcinoma.yaml",
      "term_id": "CL:1000600",
      "term_label": "lower urinary tract cell",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:1000296",
      "best_source_term_label": "epithelial cell of urethra",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000296"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of urethra"
      ],
      "supporting_source_node_names": [
        "FGFR3 Constitutive Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1000600" } }));
