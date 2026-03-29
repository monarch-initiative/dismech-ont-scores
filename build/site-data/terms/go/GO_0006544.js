window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006544"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006544",
  "term_label": "glycine metabolic process",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.519749,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Inherited Threoninemia",
      "disease_term_id": "MONDO:0010118",
      "source_file": "Inherited_Threoninemia.yaml",
      "term_id": "GO:0006544",
      "term_label": "glycine metabolic process",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006544",
      "best_source_term_label": "glycine metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006544"
      ],
      "supporting_source_term_labels": [
        "glycine metabolic process"
      ],
      "supporting_source_node_names": [
        "Secondary hyperglycinemia via glycine-serine-threonine interconversion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0006544",
      "term_label": "glycine metabolic process",
      "score": 0.239499,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006546",
      "best_source_term_label": "glycine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006546"
      ],
      "supporting_source_term_labels": [
        "glycine catabolic process"
      ],
      "supporting_source_node_names": [
        "Glycine cleavage system dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006544" } }));
