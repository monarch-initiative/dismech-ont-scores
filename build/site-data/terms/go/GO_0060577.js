window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060577"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060577",
  "term_label": "pulmonary vein morphogenesis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "GO:0060577",
      "term_label": "pulmonary vein morphogenesis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0060577",
      "best_source_term_label": "pulmonary vein morphogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060577" } }));
