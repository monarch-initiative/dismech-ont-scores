window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1904994"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1904994",
  "term_label": "regulation of leukocyte adhesion to vascular endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "GO:1904994",
      "term_label": "regulation of leukocyte adhesion to vascular endothelial cell",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:1904996",
      "best_source_term_label": "positive regulation of leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1904996"
      ],
      "supporting_source_term_labels": [
        "positive regulation of leukocyte adhesion to vascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Vascular Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1904994" } }));
