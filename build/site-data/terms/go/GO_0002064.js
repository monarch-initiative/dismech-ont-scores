window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002064"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002064",
  "term_label": "epithelial cell development",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.222392,
  "mean_score": 0.205079,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0002064",
      "term_label": "epithelial cell development",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003382",
      "best_source_term_label": "epithelial cell morphogenesis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003382"
      ],
      "supporting_source_term_labels": [
        "epithelial cell morphogenesis"
      ],
      "supporting_source_node_names": [
        "Hamartomatous polyp formation in the gastrointestinal tract"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0002064",
      "term_label": "epithelial cell development",
      "score": 0.187767,
      "direct_score": 0.0,
      "propagated_score": 0.211077,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0090557",
      "best_source_term_label": "establishment of endothelial intestinal barrier",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002064" } }));
