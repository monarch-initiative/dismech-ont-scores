window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090557"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090557",
  "term_label": "establishment of endothelial intestinal barrier",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.615385,
  "mean_score": 0.615385,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0090557",
      "term_label": "establishment of endothelial intestinal barrier",
      "score": 0.615385,
      "direct_score": 0.615385,
      "propagated_score": 0.615385,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0090557",
      "best_source_term_label": "establishment of endothelial intestinal barrier",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090557" } }));
