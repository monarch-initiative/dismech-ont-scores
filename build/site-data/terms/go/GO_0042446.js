window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042446"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042446",
  "term_label": "hormone biosynthetic process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.496309,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0042446",
      "term_label": "hormone biosynthetic process",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
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
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "GO:0042446",
      "term_label": "hormone biosynthetic process",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030187",
      "best_source_term_label": "melatonin biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030187"
      ],
      "supporting_source_term_labels": [
        "melatonin biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Altered Melatonin Secretion Timing"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0042446",
      "term_label": "hormone biosynthetic process",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
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
      "term_id": "GO:0042446",
      "term_label": "hormone biosynthetic process",
      "score": 0.349052,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.779134,
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
        "GO:0006705"
      ],
      "supporting_source_term_labels": [
        "mineralocorticoid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reduced Aldosterone Production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042446" } }));
