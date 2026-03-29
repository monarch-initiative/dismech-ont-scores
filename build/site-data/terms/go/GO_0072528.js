window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072528"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072528",
  "term_label": "pyrimidine-containing compound biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.78125,
  "mean_score": 0.589888,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lead Poisoning",
      "disease_term_id": "MONDO:0018019",
      "source_file": "Lead_Poisoning.yaml",
      "term_id": "GO:0072528",
      "term_label": "pyrimidine-containing compound biosynthetic process",
      "score": 0.78125,
      "direct_score": 0.78125,
      "propagated_score": 0.78125,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0072528",
      "best_source_term_label": "pyrimidine-containing compound biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0072528"
      ],
      "supporting_source_term_labels": [
        "pyrimidine-containing compound biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Erythrocyte pyrimidine 5'-nucleotidase deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "GO:0072528",
      "term_label": "pyrimidine-containing compound biosynthetic process",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006221",
      "best_source_term_label": "pyrimidine nucleotide biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006221"
      ],
      "supporting_source_term_labels": [
        "pyrimidine nucleotide biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Carbamoyl phosphate overflow to pyrimidine pathway"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072528" } }));
