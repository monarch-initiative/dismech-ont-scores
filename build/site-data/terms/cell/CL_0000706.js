window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000706"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000706",
  "term_label": "choroid plexus epithelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.272727,
  "mean_score": 0.272727,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "CL:0000706",
      "term_label": "choroid plexus epithelial cell",
      "score": 0.272727,
      "direct_score": 0.272727,
      "propagated_score": 0.272727,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000706",
      "best_source_term_label": "choroid plexus epithelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000706"
      ],
      "supporting_source_term_labels": [
        "choroid plexus epithelial cell"
      ],
      "supporting_source_node_names": [
        "Bacterial Invasion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000706" } }));
