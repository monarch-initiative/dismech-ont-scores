window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002566"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002566",
  "term_label": "somatic diversification of immune receptors via somatic mutation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0002566",
      "term_label": "somatic diversification of immune receptors via somatic mutation",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0016446",
      "best_source_term_label": "somatic hypermutation of immunoglobulin genes",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016446"
      ],
      "supporting_source_term_labels": [
        "somatic hypermutation of immunoglobulin genes"
      ],
      "supporting_source_node_names": [
        "B-cell terminal differentiation defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002566" } }));
