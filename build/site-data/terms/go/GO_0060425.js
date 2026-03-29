window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060425"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060425",
  "term_label": "lung morphogenesis",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.466667,
  "mean_score": 0.466667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "GO:0060425",
      "term_label": "lung morphogenesis",
      "score": 0.466667,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0060461",
      "best_source_term_label": "right lung morphogenesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060461"
      ],
      "supporting_source_term_labels": [
        "right lung morphogenesis"
      ],
      "supporting_source_node_names": [
        "Right lung hypoplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060425" } }));
