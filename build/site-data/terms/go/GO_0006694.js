window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006694"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006694",
  "term_label": "steroid biosynthetic process",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.539355,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0006694",
      "term_label": "steroid biosynthetic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0006694",
      "best_source_term_label": "steroid biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006694",
        "GO:0006703"
      ],
      "supporting_source_term_labels": [
        "estrogen biosynthetic process",
        "steroid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "GO:0006694",
      "term_label": "steroid biosynthetic process",
      "score": 0.412049,
      "direct_score": 0.0,
      "propagated_score": 0.528855,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006705",
      "best_source_term_label": "mineralocorticoid biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0006694",
      "term_label": "steroid biosynthetic process",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006702",
      "best_source_term_label": "androgen biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "GO:0006694",
      "term_label": "steroid biosynthetic process",
      "score": 0.363596,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0061370",
      "best_source_term_label": "testosterone biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061370"
      ],
      "supporting_source_term_labels": [
        "testosterone biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Hypergonadotropic Hypogonadism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006694" } }));
