window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032602"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032602",
  "term_label": "chemokine production",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 0.886154,
  "mean_score": 0.489486,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "GO:0032602",
      "term_label": "chemokine production",
      "score": 0.886154,
      "direct_score": 0.886154,
      "propagated_score": 0.886154,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0032602",
      "best_source_term_label": "chemokine production",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032602"
      ],
      "supporting_source_term_labels": [
        "chemokine production"
      ],
      "supporting_source_node_names": [
        "Fibroblast CXCL9/CXCL10 reinforcement",
        "Mixed type 1 and type 3 cytokine and chemokine amplification"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "GO:0032602",
      "term_label": "chemokine production",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0032602",
      "best_source_term_label": "chemokine production",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032602"
      ],
      "supporting_source_term_labels": [
        "chemokine production"
      ],
      "supporting_source_node_names": [
        "Interferon-Driven Beta Cell Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0032602",
      "term_label": "chemokine production",
      "score": 0.082305,
      "direct_score": 0.082305,
      "propagated_score": 0.082305,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0032602",
      "best_source_term_label": "chemokine production",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032602"
      ],
      "supporting_source_term_labels": [
        "chemokine production"
      ],
      "supporting_source_node_names": [
        "Interferon-driven beta-cell inflammatory priming"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032602" } }));
