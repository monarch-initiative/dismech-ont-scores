window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033013"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033013",
  "term_label": "tetrapyrrole metabolic process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.267243,
  "mean_score": 0.209786,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gilbert's Syndrome",
      "disease_term_id": "MONDO:0007745",
      "source_file": "Gilberts_Syndrome.yaml",
      "term_id": "GO:0033013",
      "term_label": "tetrapyrrole metabolic process",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006789",
      "best_source_term_label": "bilirubin conjugation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006789"
      ],
      "supporting_source_term_labels": [
        "bilirubin conjugation"
      ],
      "supporting_source_node_names": [
        "Reduced UGT1A1 Activity and Impaired Bilirubin Glucuronidation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "GO:0033013",
      "term_label": "tetrapyrrole metabolic process",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042167",
      "best_source_term_label": "heme catabolic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042167"
      ],
      "supporting_source_term_labels": [
        "heme catabolic process"
      ],
      "supporting_source_node_names": [
        "Alveolar hemorrhage and hemosiderin accumulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0033013",
      "term_label": "tetrapyrrole metabolic process",
      "score": 0.171036,
      "direct_score": 0.0,
      "propagated_score": 0.21952,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006783"
      ],
      "supporting_source_term_labels": [
        "heme biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Succinylacetone inhibition of heme biosynthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lead Poisoning",
      "disease_term_id": "MONDO:0018019",
      "source_file": "Lead_Poisoning.yaml",
      "term_id": "GO:0033013",
      "term_label": "tetrapyrrole metabolic process",
      "score": 0.133622,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006783"
      ],
      "supporting_source_term_labels": [
        "heme biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Inhibition of delta-aminolevulinic acid dehydratase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033013" } }));
