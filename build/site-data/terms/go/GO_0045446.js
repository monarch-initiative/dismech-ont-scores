window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045446"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045446",
  "term_label": "endothelial cell differentiation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.150769,
  "mean_score": 0.150769,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0045446",
      "term_label": "endothelial cell differentiation",
      "score": 0.150769,
      "direct_score": 0.0,
      "propagated_score": 0.150769,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0090557",
      "best_source_term_label": "establishment of endothelial intestinal barrier",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0090557"
      ],
      "supporting_source_term_labels": [
        "establishment of endothelial intestinal barrier"
      ],
      "supporting_source_node_names": [
        "Epithelial Barrier Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045446" } }));
