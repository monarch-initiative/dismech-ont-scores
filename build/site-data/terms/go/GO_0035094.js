window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035094"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035094",
  "term_label": "response to nicotine",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.444444,
  "mean_score": 0.444444,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Green Tobacco Sickness",
      "disease_term_id": "",
      "source_file": "Green_Tobacco_Sickness.yaml",
      "term_id": "GO:0035094",
      "term_label": "response to nicotine",
      "score": 0.444444,
      "direct_score": 0.444444,
      "propagated_score": 0.444444,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0035094",
      "best_source_term_label": "response to nicotine",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035094"
      ],
      "supporting_source_term_labels": [
        "response to nicotine"
      ],
      "supporting_source_node_names": [
        "Autonomic Ganglia Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035094" } }));
