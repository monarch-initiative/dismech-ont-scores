window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006760"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006760",
  "term_label": "folic acid-containing compound metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.172308,
  "mean_score": 0.172308,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0006760",
      "term_label": "folic acid-containing compound metabolic process",
      "score": 0.172308,
      "direct_score": 0.0,
      "propagated_score": 0.172308,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0046655",
      "best_source_term_label": "folic acid metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046655"
      ],
      "supporting_source_term_labels": [
        "folic acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Serine-glycine-one-carbon metabolic disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006760" } }));
