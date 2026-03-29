window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042594"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042594",
  "term_label": "response to starvation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.492308,
  "mean_score": 0.446154,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0042594",
      "term_label": "response to starvation",
      "score": 0.492308,
      "direct_score": 0.492308,
      "propagated_score": 0.492308,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042594",
      "best_source_term_label": "response to starvation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042594"
      ],
      "supporting_source_term_labels": [
        "response to starvation"
      ],
      "supporting_source_node_names": [
        "Stress-sensitive metabolic decompensation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0042594",
      "term_label": "response to starvation",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042594",
      "best_source_term_label": "response to starvation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042594"
      ],
      "supporting_source_term_labels": [
        "response to starvation"
      ],
      "supporting_source_node_names": [
        "Episodic metabolic decompensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042594" } }));
