window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060841"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060841",
  "term_label": "venous blood vessel development",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "GO:0060841",
      "term_label": "venous blood vessel development",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0060577",
      "best_source_term_label": "pulmonary vein morphogenesis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060577"
      ],
      "supporting_source_term_labels": [
        "pulmonary vein morphogenesis"
      ],
      "supporting_source_node_names": [
        "Anomalous pulmonary venous drainage",
        "Embryologic developmental disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060841" } }));
