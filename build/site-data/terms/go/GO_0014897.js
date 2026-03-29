window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0014897"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0014897",
  "term_label": "striated muscle hypertrophy",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.560427,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "GO:0014897",
      "term_label": "striated muscle hypertrophy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003300",
      "best_source_term_label": "cardiac muscle hypertrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003300"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle hypertrophy"
      ],
      "supporting_source_node_names": [
        "Recipient twin cardiac dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "GO:0014897",
      "term_label": "striated muscle hypertrophy",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003300",
      "best_source_term_label": "cardiac muscle hypertrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003300"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle hypertrophy"
      ],
      "supporting_source_node_names": [
        "Cardiomyocyte Hypertrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0014897" } }));
