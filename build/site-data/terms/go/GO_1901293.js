window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1901293"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1901293",
  "term_label": "nucleoside phosphate biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.278968,
  "mean_score": 0.180558,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "GO:1901293",
      "term_label": "nucleoside phosphate biosynthetic process",
      "score": 0.278968,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006221",
      "best_source_term_label": "pyrimidine nucleotide biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:1901293",
      "term_label": "nucleoside phosphate biosynthetic process",
      "score": 0.082148,
      "direct_score": 0.0,
      "propagated_score": 0.092346,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006754",
      "best_source_term_label": "ATP biosynthetic process",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006754"
      ],
      "supporting_source_term_labels": [
        "ATP biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Impaired Mitochondrial Energy Production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1901293" } }));
