window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0120178"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0120178",
  "term_label": "steroid hormone biosynthetic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.576184,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0120178",
      "term_label": "steroid hormone biosynthetic process",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006703",
      "best_source_term_label": "estrogen biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006703"
      ],
      "supporting_source_term_labels": [
        "estrogen biosynthetic process"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0120178",
      "term_label": "steroid hormone biosynthetic process",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006702",
      "best_source_term_label": "androgen biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006702"
      ],
      "supporting_source_term_labels": [
        "androgen biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Hyperandrogenism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "GO:0120178",
      "term_label": "steroid hormone biosynthetic process",
      "score": 0.573597,
      "direct_score": 0.0,
      "propagated_score": 0.695296,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006705",
      "best_source_term_label": "mineralocorticoid biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006704",
        "GO:0006705"
      ],
      "supporting_source_term_labels": [
        "glucocorticoid biosynthetic process",
        "mineralocorticoid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reduced Aldosterone Production",
        "Reduced Cortisol Production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0120178" } }));
