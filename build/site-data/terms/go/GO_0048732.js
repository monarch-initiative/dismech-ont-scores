window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048732"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048732",
  "term_label": "gland development",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.565928,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0048732",
      "term_label": "gland development",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0060017",
      "best_source_term_label": "parathyroid gland development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048538",
        "GO:0060017"
      ],
      "supporting_source_term_labels": [
        "parathyroid gland development",
        "thymus development"
      ],
      "supporting_source_node_names": [
        "Parathyroid hypoplasia and hypocalcemia",
        "Thymic hypoplasia and T-cell immunodeficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ulnar-Mammary Syndrome",
      "disease_term_id": "MONDO:0008411",
      "source_file": "Ulnar-Mammary_Syndrome.yaml",
      "term_id": "GO:0048732",
      "term_label": "gland development",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030879",
      "best_source_term_label": "mammary gland development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030879"
      ],
      "supporting_source_term_labels": [
        "mammary gland development"
      ],
      "supporting_source_node_names": [
        "Apocrine Gland Development Failure"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0048732",
      "term_label": "gland development",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001889",
      "best_source_term_label": "liver development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001889"
      ],
      "supporting_source_term_labels": [
        "liver development"
      ],
      "supporting_source_node_names": [
        "Persistent hepatocarcinogenic programs under NTBC therapy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048732" } }));
