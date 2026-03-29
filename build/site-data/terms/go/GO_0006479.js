window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006479"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006479",
  "term_label": "protein methylation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4375,
  "mean_score": 0.4375,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kleefstra Syndrome",
      "disease_term_id": "MONDO:0012455",
      "source_file": "Kleefstra_Syndrome.yaml",
      "term_id": "GO:0006479",
      "term_label": "protein methylation",
      "score": 0.4375,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0018022",
      "best_source_term_label": "peptidyl-lysine methylation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006479" } }));
