window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010712"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010712",
  "term_label": "regulation of collagen metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "GO:0010712",
      "term_label": "regulation of collagen metabolic process",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0032965",
      "best_source_term_label": "regulation of collagen biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032965"
      ],
      "supporting_source_term_labels": [
        "regulation of collagen biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Subepithelial collagen deposition and fibrotic remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010712" } }));
