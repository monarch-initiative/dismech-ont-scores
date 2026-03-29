window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035601"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035601",
  "term_label": "protein deacylation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "TARP syndrome",
      "disease_term_id": "MONDO:0010711",
      "source_file": "TARP_syndrome.yaml",
      "term_id": "GO:0035601",
      "term_label": "protein deacylation",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0034983",
      "best_source_term_label": "peptidyl-lysine deacetylation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034983"
      ],
      "supporting_source_term_labels": [
        "peptidyl-lysine deacetylation"
      ],
      "supporting_source_node_names": [
        "RBM10 splicing-independent replication fork dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035601" } }));
