window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0016446"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0016446",
  "term_label": "somatic hypermutation of immunoglobulin genes",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0016446",
      "term_label": "somatic hypermutation of immunoglobulin genes",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0016446",
      "best_source_term_label": "somatic hypermutation of immunoglobulin genes",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0016446" } }));
