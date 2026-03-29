window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035924"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035924",
  "term_label": "cellular response to vascular endothelial growth factor stimulus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.128,
  "mean_score": 0.128,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "GO:0035924",
      "term_label": "cellular response to vascular endothelial growth factor stimulus",
      "score": 0.128,
      "direct_score": 0.0,
      "propagated_score": 0.128,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0038084",
      "best_source_term_label": "vascular endothelial growth factor signaling pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0038084"
      ],
      "supporting_source_term_labels": [
        "vascular endothelial growth factor signaling pathway"
      ],
      "supporting_source_node_names": [
        "VEGF Overexpression and Angiogenesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035924" } }));
