window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0018022"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0018022",
  "term_label": "peptidyl-lysine methylation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kleefstra Syndrome",
      "disease_term_id": "MONDO:0012455",
      "source_file": "Kleefstra_Syndrome.yaml",
      "term_id": "GO:0018022",
      "term_label": "peptidyl-lysine methylation",
      "score": 0.625,
      "direct_score": 0.625,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0018022",
      "best_source_term_label": "peptidyl-lysine methylation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0018022"
      ],
      "supporting_source_term_labels": [
        "peptidyl-lysine methylation"
      ],
      "supporting_source_node_names": [
        "EHMT1 haploinsufficiency and epigenetic dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0018022" } }));
